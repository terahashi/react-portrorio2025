import { gsap } from 'gsap/gsap-core';
import { init } from 'ityped'; //「ityped.js」(タイピングアニメーション用)yarn add ityped
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

//////⬇︎initType
const initType = (ref) => {
  if (!ref.current) return; //ref.currentが存在しない場合実行しない

  const initTypeAnime = () => {
    init(ref.current, {
      strings: ['MY PORTFORIO'],
      startDelay: 100,
      typeSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: false,
    });
  };

  ScrollTrigger.create({
    trigger: ref.current, //渡ってきたrefがtriggerとして起動する
    onEnter: initTypeAnime, //initTypeAnimeをonEnterで実行
    start: 'top 80%',
    end: 'bottom 20%',
    once: true, //一度だけ発火
    // markers: true, //デバッグ表示（慣れたらfalseに）
  });
};

export default initType;
