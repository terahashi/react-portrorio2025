import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

// options = {}とは？ -> オプションを渡さなくてもエラーにならない。
const fadeUp = (trigger, targets, options = {}) => {
  const { y = 40, duration = 0.1, stagger = 0.1, ease = 'power3.out', start = 'top 80%', end = 'bottom 50%' } = options;

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
      opacity: 0,
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
  return tl;
};

export default fadeUp;
