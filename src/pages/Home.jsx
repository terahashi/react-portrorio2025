import { useState, useRef, useEffect } from 'react';

import Header from '../components/Header';
import SampleContent from '../components/SampleContent';

import HeroscrambleText from '../components/HeroscrambleText';
import TypingText from '../components/TypingText';

const Home = () => {
  //////IntersectionObserverを設置して「Headerの文字色を白に変化させる」
  const [isDark, setIsDark] = useState(false);
  const heroRef = useRef(null); // ヒーローエリア のContent内の監視ターゲット
  const targetRef = useRef(null); // SampleContent のContent内の監視ターゲット

  console.log(isDark);

  //IntersectionObserverを使用
  //⬇︎①「SampleContent」に入ったらHeaderを白文字
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDark(true); //白
        }
      },
      { threshold: 0.93 } //「SampleContent」が93%交差したら白にする
      // { threshold: 数値 }の「数値は0.01~0.99」が多く使用される
    );
    if (targetRef.current) observer.observe(targetRef.current);
    return () => observer.disconnect(); //クリーンアップ
  }, []);

  //⬇︎②上に戻りヒーローエリアに入ったらHeaderを黒文字
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDark(false); //黒
        }
      },
      { threshold: 0.05 } //「ヒーローエリア」が5%交差したら黒に戻す
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect(); //クリーンアップ
  }, []);

  return (
    <>
      <Header dark={isDark} />
      <div ref={heroRef} className='bg-[#deba99] w-full h-screen mt-20'>
        <HeroscrambleText />
        <TypingText />
        <h1 className='bg-[#da5555]'>Home トップページです。</h1>
        <div className='bg-custom-yellow'>
          <h1>子要素(背景黄色はbg-custom-yellowの「Tailwindcssのカスタム」)</h1>
        </div>
      </div>

      <SampleContent targetRef={targetRef} />

      <div className='bg-black w-full h-screen'>
        <h2>content2</h2>
      </div>

      <SampleContent />
    </>
  );
};

export default Home;
