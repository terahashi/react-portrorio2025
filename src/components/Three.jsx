import { useEffect, useLayoutEffect, useRef } from 'react';
import initThree from '../animations/threeAnime';
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

const AppLayout = styled.div`
  width: 100%;
  display: block;
  /* margin-top: 25px; */
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
    /* align-items: center; */
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
        <p className='sub-text'>
          こんにちは。高橋と申します。
          <br />
          Webデザイナー/コーダーとして従事してきました。 現在は独学でプログラミング技術を学習しています。
        </p>
        <p className='sub-text'>
          React / Next.js / JavaScriptを独学で学び、AIも活用しながら複数のWebサイトを作成してきました。
          <br />
          開発では「なぜその技術を選ぶのか」「どうすればより良いユーザー体験になるのか」を意識しながら取り組んでいます。
        </p>
        <p className='sub-text'>
          自然や動物やゲームが好きで、リフレッシュしながら継続して学習を続けています。
          <br /> 今後はフロントエンドを中心に設計・改善まで担えるWebエンジニアとして成長していきたいと考えています。
        </p>
      </LeftArea>

      {/* 右（3D）*/}
      <RightArea>
        <ModelArea id='cat-area' ref={containerRef}></ModelArea>
      </RightArea>
    </AppLayout>
  );
};
export default Three;
