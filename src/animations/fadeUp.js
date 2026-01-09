import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// options = {}とは？ -> オプションを渡さなくてもエラーにならない。
const fadeUp = (trigger, targets, options = {}) => {
  const { y = 40, duration = 0.3, stagger = 0.1, ease = 'power3.out', start = 'top 77%', end = 'bottom 50%', glitch = true } = options;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger, //発火地点
      start,
      end,
      toggleActions: 'play none none reset', //「スクロールによってアニメーションの各領域の発動するタイミング」を指定。左からenter（画面に入ったとき）、leave（画面から出たとき）、enterBack（下から再び画面に入ったとき）、leaveBack（上にスクロールして画面から出たとき）
      // markers: true,
    },
  });

  tl.fromTo(
    targets,
    {
      opacity: 1,
      y,
    },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease,
    }
  );

  // //グリッチ演出（fadeUp完了後）(電流のように走るエフェクト)
  // //グリッチ演出はポートフォリオの世界観には合わない->作ったことはないのでテストで作って学んでみる
  // //感想: サイバーパンクのような演出だった
  // if (glitch) {
  //   tl.to(
  //     targets,
  //     {
  //       y: () => gsap.utils.random(8, 50), //下(+)方向に 8px〜50px 瞬間移動　上は(-を付ける)
  //       x: () => gsap.utils.random(8, 50), //右(+)方向方向に 8px〜50px 瞬間移動　左は(-を付ける)
  //       skewY: () => gsap.utils.random(8, 50), // Y軸を基準に傾ける（横方向の歪み）
  //       // skewX: () => gsap.utils.random(8, 30),

  //       textShadow: `
  //         -30px 0 red,
  //          30px 0 cyan,
  //          0 30px lime
  //       `,

  //       opacity: 0.7,
  //       duration: 0.04,
  //       repeat: 3,
  //       yoyo: true,
  //       ease: 'none',
  //       clearProps: 'textShadow,skewY,x,y',
  //     },
  //     '+=0.05'
  //   );
  // }

  return tl;
};

export default fadeUp;
