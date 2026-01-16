import { useEffect, useLayoutEffect, useRef } from 'react';
import initThree from '../animations/threeAnime';
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

//全体を横並びにする
const AppLayout = styled.div`
  width: 100%;
  display: block;
  margin-top: 70px;
  @media (min-width: ${breakpoints.tablet}) {
    margin-top: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    /* grid-template-columns: repeat(2, 1fr); */
  }
`;

//左
const LeftArea = styled.div`
  width: 100%;
  margin-bottom: 30px;
  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

//右（3D）
const RightArea = styled.div`
  width: 100%;
  height: 40vh;
  @media (min-width: ${breakpoints.tablet}) {
    height: 50vh;
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
    <AppLayout>
      {/* 左 */}
      <LeftArea>
        <h2 className='text-[2rem] text-(--color-gray) mb-0'>sampleですsampleですsampleですsampleですsampleですsampleですsampleですsampleですsampleです</h2>
      </LeftArea>

      {/* 右（3D）*/}
      <RightArea>
        <ModelArea id='cat-area' ref={containerRef}></ModelArea>
      </RightArea>
    </AppLayout>
  );
};
export default Three;
