import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';
import scrambleText from '../animations/ScrambleText';

const ScrambleWrapper = styled.div`
  height: 130px;
  @media (min-width: ${breakpoints.tablet}) {
    height: 170px;
  }
  @media (min-width: ${breakpoints.pc}) {
    height: 175px;
  }
`;

const HeroscrambleText = () => {
  //refsを作成する
  const refs = {
    //original: useRef(null), //useRefを使ってDOM要素を参照する。refs.original→<h1>のDOM参照
    text1: useRef(null),
  };

  //useEffectで「コンポーネントが描画された後」にscrambleText(スクランブルアニメ)を実行する
  useEffect(() => {
    scrambleText(refs, 2.5); //refsは対象のDOM参照。1はdurationであり、継続時間
  }, []);

  return (
    <>
      <ScrambleWrapper>
        {/* <h1 ref={refs.original}>Loading...</h1> */}
        <h1 ref={refs.text1} className='text-[3rem] md:text-[5rem] lg:text-[6.5rem] mb-0 lg:text-[6.5rem] text-[#000] font-extrabold'></h1>
      </ScrambleWrapper>
    </>
  );
};

export default HeroscrambleText;
