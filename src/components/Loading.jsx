import { useRef, useEffect, useLayoutEffect } from 'react';
import { styled } from 'styled-components';
import loadingAnimation from '../animations/LoadingAnimation';

//⬇︎styled-components
const LoadingWrap = styled.div`
  .bl-loader {
    //「.bl-loader」は“全画面にかぶさる茶色の幕”
    position: fixed;
    inset: 0; //fixedとセットで使う。inset:0;は“4方向すべてを0にする省略記法”。top:0; right:0; bottom:0; left:0;のこと。画面全体を覆うのに最適。
    z-index: 1000;
    background: #f0cebd;
    overflow: hidden;
    //⬇︎「.blind-container」はブラインドを並べる"棚"
    .blind-container {
      display: flex;
      flex-direction: column;
      height: 100vh;
      overflow: hidden;
      //⬇︎「.blind」はブラインドの本体
      .blind {
        flex: 1; //.blindの幅を均等に分配できる
        width: 100%;
        height: 100vh;
        background: #111;
        transform-origin: top center; //「上端の真ん中を基準に指でつまんで固定する。」下方向へ向かって縮んでいく
      }
    }
  }
`;

//⬇︎Loadingコンポーネント
//{ onComplete }はApp.jsxから渡ってきたprops。
const Loading = ({ onComplete }) => {
  // ブラインド全体を保持するref
  const containerRef = useRef(null);

  //⬇︎「DOMが画面に"描画される直前”に実行される【useLayoutEffect】」を使用。
  useLayoutEffect(() => {
    //① refがまだ設定されていない場合は何もしない
    if (!containerRef.current) return;

    //②子要素.blindを全部取得（これで querySelectorAllは不要！）
    const blinds = containerRef.current.querySelectorAll('.blind');

    //③⬇︎GSAPアニメーションを実行(各blindsとonCompleteを渡す)
    loadingAnimation(blinds, onComplete);
  }, []);

  return (
    <LoadingWrap>
      <div className='bl-loader'>
        <div className='blind-container' ref={containerRef}>
          {Array.from({ length: 15 }).map((_, index) => (
            <div className='blind' key={index}></div>
          ))}

          {/*⬆︎ Array.from()は「新しい配列を生成するメソッド」
          第一引数　_ は配列の値（今回はundefined）
          第二引数 index は要素の「インデックス番号（0〜9）」
          ・Reactでは「ループで生成するblind要素に key={index} をつける必要がある。」
          */}
        </div>
      </div>
    </LoadingWrap>
  );
};

export default Loading;
