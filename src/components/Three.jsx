import { useEffect, useLayoutEffect, useRef } from 'react';
import initThree from '../animations/threeAnime';
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

//全体を横並びにする
const AppLayout = styled.div`
  display: block;
  width: 100%;
  height: 100vh;
  @media (min-width: ${breakpoints.tablet}) {
    display: flex;
  }
`;

//左
const LeftArea = styled.div`
  width: 100%;
  height: auto;
  background: #000;
  display: block;
  @media (min-width: ${breakpoints.tablet}) {
    height: 100vh;
    width: 30%;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

//右（3D）
const RightArea = styled.div`
  width: 100%;
  height: 70vh;
  background: #000;
  display: block;

  @media (min-width: ${breakpoints.tablet}) {
    height: 100vh;
    width: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

//ModelAreaに「widthとheightを追加する」
const ModelArea = styled.div`
  width: 100%;
  height: 100%;
`;

////////Threeコンポーネント
const Three = () => {
  const containerRef = useRef(null);

  //「useLayoutEffect」を使う。
  // DOMがレンダリングされる直前に呼ばれるので、initThree内の「getBoundingClientRect()」で正しいサイズを取得しやすい。
  useLayoutEffect(() => {
    //まだ「containerRef(ModelArea = #cat-area)がDOMに存在しないならinitThreeを実行せずに終了」
    if (!containerRef.current) return;

    //threeAnime.js初期化 実行
    const cleanup = initThree(containerRef.current);

    //(新規追加)初回レンダリング直後に resize を強制発火
    window.dispatchEvent(new Event('resize'));

    //アンマウント(コンポーネント)が消える時にthreeAnime.jsを破棄。メモリリークを回避する
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div>
      <AppLayout>
        {/* 左 */}
        <LeftArea className='p-8'>
          <h2>sampleです</h2>
          <p>Blenderで自作 cat-Robo</p>
        </LeftArea>

        {/* 右（3D犬） */}
        <RightArea className='p-8'>
          <ModelArea id='cat-area' ref={containerRef}></ModelArea>
        </RightArea>
      </AppLayout>
    </div>
  );
};
export default Three;
