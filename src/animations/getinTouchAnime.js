import { gsap } from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

/////////SVGを使った Get in Touch
const getinTouch = (svgRef) => {
  const paths = svgRef.current.querySelectorAll('.char');
  const fills = svgRef.current.querySelectorAll('.char-fill');

  paths.forEach((path, i) => {
    const length = Math.ceil(path.getTotalLength());
    const fill = fills[i];

    //初期状態(SVGが後から描かれていく)演出になる
    gsap.set(path, {
      strokeDasharray: length, //「実線部分の長さ」と「空白部分の長さ」を交互に指定する
      strokeDashoffset: length, //線が全部隠れる
    });

    // 塗りのズレを初期設定
    gsap.set(fill, {
      fill: '#fff',
      opacity: 0,
      attr: {
        transform: 'translate(-1.5, 1.5)', //ここが塗りのズレ！
      },
    });

    //タイムライン
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: path, //各pathごとに発火する
        start: 'top 80%',
        end: '+=300', // end= start + 300px (startが発動した瞬間・そこからさらに300pxスクロールしたらアニメ完了)
        scrub: true,
      },
    });

    // 線を描く
    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: 'none',
    });

    // 塗りをズレて出す
    tl.to(
      fill,
      {
        opacity: 1,
        duration: 0.7,
        ease: 'none',
      },
      3 //このアニメをタイムラインの「2秒の位置から開始」
    );
  });
};

export default getinTouch;
