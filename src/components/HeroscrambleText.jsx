import { useEffect, useRef } from 'react';
import scrambleText from '../animations/ScrambleText';

const HeroscrambleText = () => {
  //refsを作成する
  const refs = {
    original: useRef(null), //useRefを使ってDOM要素を参照する。refs.original→<h1>のDOM参照
    text1: useRef(null),
  };

  //useEffectで「コンポーネントが描画された後」にscrambleText(スクランブルアニメ)を実行する
  useEffect(() => {
    scrambleText(refs, 2.5); //refsは対象のDOM参照。1はdurationであり、継続時間
  }, []);

  return (
    <div>
      <h1 ref={refs.original}>Loading...</h1>
      <h2 ref={refs.text1} className='text-[6rem] text-[#000] font-extrabold'></h2>
    </div>
  );
};

export default HeroscrambleText;
