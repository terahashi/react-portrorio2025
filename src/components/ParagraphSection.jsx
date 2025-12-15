import { useRef, useEffect, useLayoutEffect } from 'react';
import paragraphAnime from '../animations/paragraphAnime';
import styled from 'styled-components';

const ParaSection = styled.section`
  background: #000;
  padding: 5%;
  margin-bottom: 5%;
  &:last-of-type {
    margin-bottom: 25%;
  }
  .paragraph-area {
    padding: 10px;
    /* display: flex; //子要素の「.headline」と「{children}」を並べたい時 */
  }
  .headline {
    position: relative;
    overflow: hidden;
    display: inline-block; //rectを文字幅ピッタリにする。inline-blockは「中身（内容）分だけの幅を取る」
    text-align: left;
    /* margin-bottom: 0; */
    /* height: fit-content; //.headlineの高さが定まる。「.rectとspan.label」が.headline高さピッタリになる。 */
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
    <ParaSection>
      <div className='paragraph-area' ref={paraRef}>
        <h1 className='headline'>
          <span className='rect'></span>
          <span className='label'>{title}</span>
        </h1>

        {/* 👇 Works / Skills / */}
        {children}
      </div>
    </ParaSection>
  );
};

export default ParagraphSection;
