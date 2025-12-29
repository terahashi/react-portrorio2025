import gsap from 'gsap';

const animateHamburger = (hamburgerRef, navRef, nav2Ref, navLiRefs) => {
  //①Menu.jsxから受け取る。ref.currentからDOMを取得
  const hamburger = hamburgerRef.current;
  const nav = navRef.current;
  const nav2 = nav2Ref.current;
  const navli = navLiRefs.current;

  if (!hamburger || !nav || !nav2) return;

  //②メニュー開閉アニメーションのタイムライン
  //初期は「閉じている」状態に揃えるため「reversed:true を付ける。」
  const menuTl = gsap.timeline({ paused: true, reversed: true });
  //⬇︎上と下のnavを同時に出す
  menuTl
    .to(nav, {
      x: 0,
      duration: 0.6,
      ease: 'elastic.out(0.5, 0.4)',
    })
    .to(
      nav2,
      {
        x: 0,
        duration: 0.6,
        ease: 'elastic.out(0.5, 0.4)',
      },
      '-=0.6'
    )
    //⬇︎nav1の「li要素群」をフェードインで出す
    .from(
      navli,
      {
        x: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: 'power2.out',
      },
      '-=0.4'
    );

  //③3本線ハンバーガーメニューから「✖︎印アニメーション」
  const bars = hamburger.querySelectorAll('span');
  const burgerTl = gsap.timeline({ paused: true, reversed: true }); //両方とも「reversed:true」にして初期は「閉じた状態（＝三本線）」に揃えた
  //GSAPで各線を✖︎印アニメーションに変形
  burgerTl.to(bars[0], { y: 8, duration: 0.2, rotate: 45 }).to(bars[1], { opacity: 0, duration: 0.2 }, '<').to(bars[2], { y: -8, duration: 0.2, rotate: -45 }, '<');

  //⬇︎クリックで同期して開閉させる
  //ハンバーガー全体をクリック対象にしているはずなので hamburger を使う
  //イベントハンドラonClickを定義
  const onClick = () => {
    // 判定はburgerTl....つまり if (burgerTl.reversed()) だけで良し（2つを常に同じ方向で play/reverse させる）
    if (burgerTl.reversed()) {
      // ⬇︎現在はreversed（初期）なので、play()で✖︎＆メニュー開く
      burgerTl.play();
      menuTl.play();
    } else {
      // ⬇︎現在はplay済み（✖︎）なので、reverse()で元に戻す
      burgerTl.reverse();
      menuTl.reverse();
    }
  };

  //⬇︎hamburgerをクリックすると「イベントハンドラonClickを登録」
  hamburger.addEventListener('click', onClick);

  // ⬇︎外(Menu.jsx側で)操作したいcloseMenu()関数
  // <Link>をクリックするとメニューを閉じる関数です(ReactはSPAなので<a href>のようにページ遷移しないので必要)
  const closeMenu = () => {
    if (!burgerTl.reversed()) {
      burgerTl.reverse();
      menuTl.reverse();
    }
  };

  // ⬇︎外(Menu.jsx側で)操作したいcloseMenu関数とcleanup関数をMenu.jsxに返す。
  //クリーンアップ（useEffectのreturnで呼べるように）
  return {
    closeMenu,
    cleanup: () => {
      hamburger.removeEventListener('click', onClick);
      menuTl.kill(); //⬅︎タイムラインをkillしてメモリ解放
      burgerTl.kill();
    },
  };
};

export default animateHamburger;
