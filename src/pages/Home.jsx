import { useEffect, useContext } from 'react';
import { useOutletContext } from 'react-router-dom'; //⭐️useOutletContextは「親(Layout.jsx)から子(Home.jsx)に【headerRef】を渡すためのフック」

//⬇︎CoustomHook
import useIntersection from '../hooks/useIntersection';
import ColorContext from '../contexts/ColorContext';

//⬇︎components
import Hero from '../components/sections/Hero.jsx';
import WorkSection from '../components/sections/WorksSection.jsx';
import AboutSection from '../components/sections/AboutSection.jsx';
import SkillsSection from '../components/sections/SkillsSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';
import ReturnTop from '../components/common/ReturnTop.jsx';

const Home = () => {
  //⬇︎親(Layout.jsx)から受け取った「headerRefを使用するために【useOutletContext()】を使用する」
  // headerRef は「固定（SideFixed.jsx）要素が Header に被らないようにするため」に使っています。
  // headerRefで「side.jsのareaFixedFunk関数」でHeaderの高さ・位置取得
  const { headerRef } = useOutletContext();

  //⬇︎useContext(ColorContext)使用
  const { setIsDark } = useContext(ColorContext);

  //⬇︎「useIntersecton(カスタムフック化)」で監視し、Headerの文字色を変化させる。
  //「targetRef」はHero要素に付けて監視対象にするrefです
  const { targetRef, isIntersecting } = useIntersection({
    threshold: 0.09,
    //(初期)ヒーローが画面内に9%以上入っている → isIntersecting = true = 初期値のisDarkはHeader黒文字
    //ヒーローが画面内に9%未満になる(つまりほぼ離れた)→ isIntersecting = false = Header白文字に変化
  });

  //⬇︎useEffectで「useContextで渡ってきた setIsDark(更新用関数)」を使う
  useEffect(() => {
    setIsDark(!isIntersecting);
  }, [isIntersecting, setIsDark]);
  //・依存配列でisIntersecting(監視要素がtrueか否か判定)が変わる度にuseEffect実行。
  //setIsDarkは「useContextで渡された関数なので、依存に入れる（React推奨）」

  return (
    <>
      <Hero targetRef={targetRef} />

      <AboutSection />

      <WorkSection />

      <SkillsSection headerRef={headerRef} />

      <ContactSection />

      <ReturnTop />
    </>
  );
};

export default Home;
