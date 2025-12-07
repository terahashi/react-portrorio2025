import { useEffect, useRef } from 'react';
import initThree from '../animations/threeAnime';
import styled from 'styled-components';

//全体を横並びにする
const AppLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

//左側
const LeftArea = styled.div`
  width: 30%;
  flex: 1;
  background: #000;
  display: flex; /* ← これが必要 */
  flex-direction: column; /* ← h1 と p を縦並びにする */
  justify-content: center; /* ← 縦中央 */
  align-items: center; /* ← 横中央 */
  padding: 20px;
`;

//右側（3Dを縦中央に置く）
const RightArea = styled.div`
  width: auto;
  flex: 1;
  background: #927474;
  display: flex;
  flex-direction: column;
  justify-content: center; /* 横中央 */
  align-items: center; /* 縦中央 */
`;

//ModelAreaに「widthとheightを追加する」
const ModelArea = styled.div`
  width: 100%;
  height: 100%;
`;

////////Threeコンポーネント
const Three = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    //⬇︎「まだ containerRef(ModelArea = #dog-area)がDOMに存在しないなら (つまりnullならtrue扱いになり) initThreeを実行しない」
    if (!containerRef.current) return;

    //⬇︎Three.js(initThree)初期化 実行
    const cleanup = initThree(containerRef.current);

    //⬇︎アンマウント(コンポーネント)が消える時にThree.jsを破棄。メモリリークを回避する
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div>
      <AppLayout>
        <LeftArea>
          <h1>sampleです</h1>
          <p>Thank you for sharing!"</p>
          <p>
            sketchfab クレジット <br></br>"Dog Puppy" (https://skfb.ly/oRKH6) by kenchoo is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
          </p>
        </LeftArea>

        {/* 右側（3D犬） */}
        <RightArea>
          <ModelArea id='dog-area' ref={containerRef}></ModelArea>
        </RightArea>
      </AppLayout>
    </div>
  );
};
export default Three;
