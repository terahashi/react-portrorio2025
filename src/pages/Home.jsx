import { useEffect, useContext } from 'react';
import useIntersection from '../hooks/useIntersection';
import ColorContext from '../contexts/ColorContext';

import Hero from '../components/Hero';
import Three from '../components/Three';
import SampleContent from '../components/SampleContent';
import SampleContent2 from '../components/SampleContent2.jsx';
import GetInTouch from '../components/GetInTouch';
import ParagraphSection from '../components/ParagraphSection';

const Home = () => {
  //⬇︎useContext使用
  const { setIsDark } = useContext(ColorContext);

  //⬇︎「useIntersecton(カスタムフック化)」で監視し、Headerの文字色を変化させる。
  //「targetRef」はHero要素に付けて監視対象にするrefです
  const { targetRef, isIntersecting } = useIntersection({
    threshold: 0.09,
    //(初期)ヒーローが画面内に9%以上入っている → isIntersecting = true = 初期値のisDarkはHeader黒文字
    //ヒーローが画面内に9%未満になる(つまりほぼ離れた)→ isIntersecting = false = Header白文字に変化
  });

  //⬇︎useEffectで「useContextで渡ってきた setIasDark(更新用関数)」を使う
  useEffect(() => {
    setIsDark(!isIntersecting);
  }, [isIntersecting, setIsDark]);
  //・依存配列でisIntersecting(監視要素がtrueか否か判定)が変わる度にuseEffect実行。
  //setIsDarkは「useContextで渡された関数なので、依存に入れる（React推奨）」

  return (
    <>
      {/* ⬇︎targetRefを付けて監視。ヒーローが画面内に9%未満になる(つまりほぼ離れた) = trueになりHeader白文字に変化。 */}
      <Hero targetRef={targetRef} />

      <Three />

      <ParagraphSection title='Works'>
        <SampleContent />
      </ParagraphSection>

      <ParagraphSection title='Skills'>
        <SampleContent2 />
      </ParagraphSection>

      <GetInTouch />
    </>
  );
};

export default Home;
