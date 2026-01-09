import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const paragraphAnime = (paraRef) => {
  const q = gsap.utils.selector(paraRef); //gsap.utils.selector()は「対象つまりparaRef(.paragraph-area)の中だけで要素を選択できる関数を作る」

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: paraRef.current, //paraRef要素(section要素)をtriggerにする
      start: 'top 80%',
      end: 'bottom 50%',
      toggleActions: 'play none none reset', //「スクロールによってアニメーションの各領域の発動するタイミング」を指定。左からenter（画面に入ったとき）、leave（画面から出たとき）、enterBack（下から再び画面に入ったとき）、leaveBack（上にスクロールして画面から出たとき）
      // markers: true,
    },
  });

  //⬇︎①「.headlineの中にある.rect要素(左から流れてくる白い長方形だけ。)」白い長方形が左から右へ走る
  tl.fromTo(q('.headline .rect'), { x: '-105%' }, { x: '100%', duration: 1, ease: 'power3.inOut' });
  //⬇︎②タイトル文字がふわっと出現
  tl.fromTo(q('.headline .label'), { opacity: 0 }, { opacity: 1, duration: 0.4, delay: 0.5 }, '<'); // "<"「rectの動きと少し重ねる」
  //⬇︎③段落やボタンが流れるように出現
  // tl.fromTo(q('.slideX'), { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.7, delay: 0.2, ease: 'power.out' });
};

export default paragraphAnime;
