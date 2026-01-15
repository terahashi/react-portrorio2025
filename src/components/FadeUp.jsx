import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

import fadeUp from '../animations/fadeUp';
import breakpoints from '../styles/breakpoints';

const FadeWrap = styled.div`
  overflow: hidden;
  margin-bottom: 25px;
  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 25px;
  }
  &:nth-of-type(2) {
    margin-bottom: 50px;
    @media (min-width: ${breakpoints.tablet}) {
      margin-bottom: 50px;
    }
  }
`;

const FadeUp = ({ title, children, options }) => {
  //useRefを作成
  const FadeRef = useRef(null);

  //useEffectで描画後に実行
  useEffect(() => {
    const root = FadeRef.current;
    if (!root) return;

    //下記の「.fade-splitや.charや.fade-p」は【別々に呼び出されている。(まとめて渡している訳ではない)】

    //①FadeRefのDOMの「タイトル部分の.fade-splitを全て取得。」
    // ①だけgsap.utils.toArrayを使っている理由はstagger前提だから
    const splits = gsap.utils.toArray(root.querySelectorAll('.fade-split'));
    //⬇︎「このFadeUpには.fade-splitが存在しないケースがある」だからif文を使用して防御コードを作成する。
    if (splits.length) {
      fadeUp(root, splits, options);
    }

    // ②FadeRefのDOM「.charを全て取得。」
    const chars = root.querySelectorAll('.char');
    if (chars.length) {
      fadeUp(root, chars, options);
    }

    // ③FadeRefのDOM「.fade-pを全て取得。」
    const fadep = root.querySelectorAll('.fade-p');
    if (fadep.length) {
      fadeUp(root, fadep, options);
    }
  }, []);

  return <FadeWrap ref={FadeRef}>{children}</FadeWrap>;
};

export default FadeUp;
