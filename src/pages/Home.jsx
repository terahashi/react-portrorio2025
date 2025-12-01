import { useState, useRef, useEffect } from 'react';

import Header from '../components/Header';
// import Hero from '../components/Hero';
import SampleContent from '../components/SampleContent';
import useIntersection from '../hooks/useIntersection';

import HeroscrambleText from '../components/HeroscrambleText';
import TypingText from '../components/TypingText';

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
      {/* <Header dark={isDark} /> */}
      <Header $isDark={!isIntersecting} />

      {/* ⬇︎Heroコンポーネントを後で作成して使用する 子コンポーネントなのでtargetRefとして渡す */}
      {/* <Hero targetRef={targetRef} /> */}

      <div ref={targetRef} className='bg-[#f0cebd] w-full h-screen'>
        <HeroscrambleText />
        <TypingText />
        <h1 className='bg-[#da5555]'>Home トップページです。</h1>
        <div className='bg-custom-yellow'>
          <h1>子要素(背景黄色はbg-custom-yellowの「Tailwindcssのカスタム」)</h1>
        </div>
      </div>

      <SampleContent />

      <div className='bg-black w-full h-screen'>
        <h2>content2</h2>
      </div>

      <SampleContent />
    </>
  );
};

export default Home;
