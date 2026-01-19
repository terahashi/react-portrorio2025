import { useRef, useEffect, useLayoutEffect } from 'react';
import paragraphAnime from '../animations/paragraphAnime';
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

const ParaWrap = styled.div`
  .paragraph-area {
  }
  .headline {
    position: relative;
    overflow: hidden;
    display: inline-block; //rectを文字幅ピッタリにする。inline-blockは「中身（内容）分だけの幅を取る」
    text-align: left;
    .rect {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      background-color: #fff;
      transform: translateX(-101%);
    }
    span.label {
      display: inline-block;
      color: #fff;
      font-size: 2rem;
      font-weight: bold;
      @media (min-width: ${breakpoints.tablet}) {
        font-size: 4rem;
      }
      @media (min-width: ${breakpoints.pc}) {
        font-size: 4.5rem;
      }
    }
  }
`;

const ParagraphSection = ({ className = '', title, children }) => {
  //⬆︎ { className = ''} はデフォルト引数。propで取得したclassNameが「undefinedなら、空文字''を使う」

  //useRefを作成
  const paraRef = useRef(null);

  //useLayoutEffectで「ブラウザに描画される直前に実行」
  useLayoutEffect(() => {
    paragraphAnime(paraRef);
  }, []);

  return (
    <ParaWrap className={`paragraph-section ${className}`}>
      <div className='paragraph-area' ref={paraRef}>
        <h1 className='headline mb-0'>
          <span className='rect'></span>
          <span className='label'>{title}</span>
        </h1>

        {/* childrenには「親コンポーネントで挟んだWorks/Skills」なども入れることができる */}
        {children}
      </div>
    </ParaWrap>
  );
};

export default ParagraphSection;
