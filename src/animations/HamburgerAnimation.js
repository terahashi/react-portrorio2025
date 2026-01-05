////ハンバーガーメニューの処理をまとめたjsファイル
import gsap from 'gsap';

const animateHamburger = (hamburgerRef, navRef, nav2Ref, navLiRefs) => {
  //①Menu.jsxから受け取る。ref.currentからDOMを取得
  const hamburger = hamburgerRef.current;
  const nav = navRef.current;
  const nav2 = nav2Ref.current;
  const navli = navLiRefs.current;

  if (!hamburger || !nav || !nav2) return;

  //②メニュー開閉アニメーションのタイムライン
  //初期は「閉じている」状態に揃えるため「true」を付ける。
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
  const burgerTl = gsap.timeline({ paused: true, reversed: true }); //「true」にして初期は「閉じた状態（＝三本線）」に。
  //⬇︎GSAPで各線を✖︎印アニメーションに変形
  burgerTl.to(bars[0], { y: 8, duration: 0.2, rotate: 45 }).to(bars[1], { opacity: 0, duration: 0.2 }, '<').to(bars[2], { y: -8, duration: 0.2, rotate: -45 }, '<');

  //⬇︎クリックで同期して開閉させる
  //イベントハンドラonClickを定義
  const onClick = () => {
    // 判定はburgerTl。つまり if (burgerTl.reversed()) だけで良し（2つを常に同じ方向で play/reverse させる）
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

  // ⬇︎closeMenu()関数。外で(Menu.jsx側で)操作する。
  // <Link>をクリックするとメニューを閉じる関数です(ReactはSPAなので<a href>のようにページ遷移しないので必要)
  const closeMenu = (callbackNavigate) => {
    // if (!burgerTl.reversed())で「メニューが“開いている状態”から"これから閉じる必要がある状態"かどうか」判定
    if (!burgerTl.reversed()) {
      burgerTl.reverse();
      menuTl.reverse();

      ////⬇︎「menuItems配列データを"使わない"場合のリンク遷移」
      //・menuTl.reverse()実行時の処理。「つまりmenuTl(メニューのGSAPタイムライン)が閉じるアニメーション中の場合。」
      // もしif(callbackNavigate)が存在した場合「callbackNavigateは、Menu.jsxから渡ってきたコールバックnavigate('/#works')を実行して遷移する」
      // eventCallbackとは「このタイムラインで特定のイベントが発生した時に、指定した関数(今回はonReverseComplete)を呼び出すためのメソッド」
      // onReverseCompleteとは「上記コードmenuTl.reverse()、つまりGSAPの"メニューを閉じるreverse再生"が完了(onReverseがComplete)した時」にcallbackNavigateを発火するイベント
      if (callbackNavigate) {
        menuTl.eventCallback('onReverseComplete', callbackNavigate); //「閉じ終わったらcallbackNavigate、つまりnavigate('/#works')を実行して」という指示を登録する
      }
    } else {
      //・elseの場合は「既にメニューは閉じている場合」
      // callbackNavigateが渡されていたら「navigate(path)」を実行する。
      if (callbackNavigate) {
        callbackNavigate?.(); //?.を書いて「callbackNavigateが存在したら'/#works'で遷移を実行。無かったらメニューをただ閉じるだけで遷移しない。」
      }
    }
  };

  // ⬇︎returnで「closeMenu関数とcleanup関数をMenu.jsxに返す。」外で(Menu.jsx側で)操作する。
  //今回使用: return { 処理 }　で関数(closeMenuやcleanup)をまとめて返す
  //昔の書き方: return () => { 処理 } で関数を1つだけ返す。
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
