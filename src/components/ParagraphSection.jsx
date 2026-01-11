import { useRef, useEffect, useLayoutEffect } from 'react';
import paragraphAnime from '../animations/paragraphAnime';
import styled from 'styled-components';

const ParaWrap = styled.div`
  padding-bottom: 50px;
  &:last-of-type {
  }
  .paragraph-area {
  }
  .headline {
    position: relative;
    overflow: hidden;
    display: inline-block; //rectを文字幅ピッタリにする。inline-blockは「中身（内容）分だけの幅を取る」
    text-align: left;
    /* margin-bottom: 0; */
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
      font-size: 3rem;
      font-weight: bold;
    }
  }
`;

const ParagraphSection = ({ title, children }) => {
  //useRefを作成する
  const paraRef = useRef(null);

  //useLayoutEffectで「ブラウザに描画される直前に実行」
  useLayoutEffect(() => {
    paragraphAnime(paraRef);
  }, []);

  return (
    <ParaWrap>
      <div className='paragraph-area' ref={paraRef}>
        <h1 className='headline'>
          <span className='rect'></span>
          <span className='label'>{title}</span>
        </h1>

        {/* 👇 Works / Skills / */}
        {children}
      </div>
    </ParaWrap>
  );
};

export default ParagraphSection;
