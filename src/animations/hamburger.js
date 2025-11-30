import gsap from 'gsap';

export const animateHamburger = (hamburgerRef, navRef, nav2Ref, navLiRefs) => {
  const hamburger = hamburgerRef.current;
  const nav = navRef.current;
  const nav2 = nav2Ref.current;
  const navli = navLiRefs.current;

  // メニュー開閉タイムライン
  const menuTl = gsap.timeline({ paused: true });
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

  // ハンバーガー ✖︎ アニメーション
  const bars = hamburger.querySelectorAll('span');
  const burgerTl = gsap.timeline({ paused: true });
  burgerTl.to(bars[0], { y: 8, duration: 0.2, rotate: 45 }).to(bars[1], { opacity: 0, duration: 0.2 }, '<').to(bars[2], { y: -8, duration: 0.2, rotate: -45 }, '<');
  burgerTl.reverse(0); // 初期状態は三本線

  // クリックで開閉
  hamburger.addEventListener('click', () => {
    burgerTl.reversed() ? burgerTl.play() : burgerTl.reverse();
    menuTl.reversed() ? menuTl.play() : menuTl.reverse();
  });
};
