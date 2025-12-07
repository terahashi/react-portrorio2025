import { useState, useRef, useEffect } from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import useIntersection from '../hooks/useIntersection';
import Three from '../components/3d';
import SampleContent from '../components/SampleContent';

const Home = () => {
  //⬇︎「カスタムフック化したuseIntersecton(IntersectionObserver)」を設置してHeaderの文字色を変化させる
  const { targetRef, isIntersecting } = useIntersection({
    threshold: 0.09,
    //ヒーローが画面内に9%以上入っている → isIntersecting = true = Header黒文字
    //ヒーローが画面内に9%未満になる(つまりほぼ離れた)→ isIntersecting = false = Header白文字に変化
    //①{ !isIntersecting } で反転させている
    //②isIntersecting = true（初期値）だとすると【$isDark={!isIntersecting} = falseになる】
    //③Headerの$isDark = false つまり color:#000（黒）が選択され初期表示される
  });

  return (
    <>
      <Header $isDark={!isIntersecting} />

      {/* ⬇︎HeroコンポーネントにtargetRefとして渡す。ヒーローが画面内に9%未満になる(つまりほぼ離れた) = Header白文字に変化 */}
      <Hero targetRef={targetRef} />

      <Three />

      <div className='bg-black w-full h-screen'>
        <h2>content2</h2>
      </div>

      <SampleContent />

      <SampleContent />
    </>
  );
};

export default Home;
