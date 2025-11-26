import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger);

const ScrambleText = (refs, duration = 2) => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: refs.original.current, //refsのoriginal:useRef(null)を「発火地点に設定」する
      start: 'top 80%',
      end: 'bottom 20%',
      toggleActions: 'play none none reverse',
      once: true, //一度だけ発火
      // markers: true, //デバッグ表示（慣れたらfalseに）
    },
  });

  gsap.set(refs.original.current, { opacity: 0 }); //gsap.set()で「アニメーション前の初期スタイルをセット」
  gsap.set(refs.text1.current, { opacity: 1 });

  tl.to(refs.text1.current, {
    scrambleText: { text: 'MY PORTFORIO|', chars: 'lowerCase' },
    duration: duration,
    ease: 'none',
  });

  return tl; //作成したタイムラインを返すことで、呼び出し元で「再生・逆再生・コントロール」が可能
};

export default ScrambleText;
