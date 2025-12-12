import { useState, useRef, useEffect } from 'react';

import useIntersection from '../hooks/useIntersection';
import Hero from '../components/Hero';
import Three from '../components/3d';
import SampleContent from '../components/SampleContent';

const Home = ({ setIsDark }) => {
  //⬇︎「useIntersecton(カスタムフック化)」で監視し、Headerの文字色を変化させる。
  //「targetRef」はHero要素に付けて監視対象にするrefです
  const { targetRef, isIntersecting } = useIntersection({
    threshold: 0.09,
    //ヒーローが画面内に9%以上入っている → isIntersecting = true = Header黒文字
    //ヒーローが画面内に9%未満になる(つまりほぼ離れた)→ isIntersecting = false = Header白文字に変化
  });

  //⬇︎useEffectで「propsで渡ってきたsetIsDark」を使う
  //初期値はisDarkはfalseなので「Headerは黒文字になる」
  useEffect(() => {
    setIsDark(!isIntersecting);
  }, [isIntersecting, setIsDark]);
  //⬆︎依存配列でisIntersectingが変わる度にuseEffect実行。
  //・setIsDarkは「propsで渡された関数なので依存に入れる（React推奨）」

  return (
    <>
      {/* ⬇︎targetRefを付けて監視。ヒーローが画面内に9%未満になる(つまりほぼ離れた) = trueになりHeader白文字に変化。 */}
      <Hero targetRef={targetRef} />

      {/* <Three /> */}

      <div className='bg-black w-full h-screen'>
        <h2>content2</h2>
      </div>

      <SampleContent />

      <SampleContent />
    </>
  );
};

export default Home;
