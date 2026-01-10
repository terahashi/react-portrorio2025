// import { gsap } from 'gsap/gsap-core';
// import { ScrollTrigger } from 'gsap/all';
// gsap.registerPlugin(ScrollTrigger);

//追記:GSAPを使わない。->理由:ファーストビューでそのままタイピング表示するので「スクロールトリガーを使わなくてOK。」
import { init } from 'ityped'; //「ityped.jsライブラリを使用する。」(タイピングアニメーション用)yarn add ityped

//////⬇︎initType
const initType = (textRef) => {
  if (!textRef.current) return; //ref.currentが存在しない場合実行しない

  init(textRef.current, {
    strings: ['web front-end engineer working with React and JavaScript. React and JavaScript.'],
    startDelay: 100,
    typeSpeed: 100,
    showCursor: true,
    cursorChar: '|',
    loop: false,
  });

  // const initTypeAnime = () => {
  //   init(textRef.current, {
  //     strings: ['MY PORTFORIO'],
  //     startDelay: 100,
  //     typeSpeed: 100,
  //     showCursor: true,
  //     cursorChar: '|',
  //     loop: false,
  //   });
  // };

  // ScrollTrigger.create({
  //   trigger: textRef.current, //渡ってきたrefがtriggerとして起動する
  //   onEnter: initTypeAnime, //initTypeAnimeをonEnterで実行
  //   start: 'top 80%',
  //   end: 'bottom 20%',
  //   once: true, //一度だけ発火
  //   // markers: true, //デバッグ表示（慣れたらfalseに）
  // });
};

export default initType;
