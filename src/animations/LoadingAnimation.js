//使う先は「Loading.jsx」
//ブラインドのローディングアニメ
import gsap from 'gsap';

const loadingAnimation = (blinds, onComplete) => {
  const tl = gsap.timeline({
    //⬇︎外側のonComplete:は「GSAPのtimelineが全部終わったら実行」
    onComplete: () => {
      onComplete(); //⬅︎内側はLoading.jsxから"propsで渡ってきたonComplete()"を実行 => 実体は setLoading(false) => ローディングが消えてメイン画面が出る
    },
  });

  // 1つずつ上から下に開くブラインドアニメ
  tl.to(blinds, {
    scaleY: 0, //scaleY
    duration: 0.5,
    ease: 'power2.in',
    stagger: 0.07, //⬅︎staggerで".blind二要素1つ1つが順番に開く"「0に近づくほど速く開く」
  });

  // 1つずつ左から右に開くブラインドアニメ
  // tl.to('.blind', {
  //   scaleX: 0, //scaleX
  //   duration: 1,
  //   stagger: 0.15,//⬅︎staggerで".blind二要素1つ1つが順番に開く"「0に近づくほど速く開く」
  //   ease: 'power4.inOut',
  // });
};

export default loadingAnimation;
