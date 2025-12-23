//「jsファイルはいらない」
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

////styled-components
//Stalkerは「マウスストーカー」
const Stalker = styled.div`
  position: fixed;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #0fd329;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1; //// ‼️縦文字はみ出し防止

  pointer-events: none;
  z-index: 9999;

  @media (hover: none) {
    display: none;
  }

  .cursor-text {
    font-size: 9px;
    font-weight: 600;
    opacity: 0;
    transition: opacity 0.2s ease;
    white-space: nowrap; // ‼️長い文字が折り返さない
  }
  &.is-hover {
    background-color: #0fd329;
    width: 35px;
    height: 35px;
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 1;
  }
  &.is-hover .cursor-text {
    color: #000;
    opacity: 1;
  }
`;

////MouseStalkerコンポーネント
const MouseStalker = ({ isHovering }) => {
  //⬇useRef
  const stalkerRef = useRef(null);
  const textRef = useRef(null);
  //マウスのref
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  //マウスストーカーのref
  const stalkerX = useRef(0);
  const stalkerY = useRef(0);
  //easeは「"遅れ具合"を表す」
  const ease = 0.1;

  ////⬇︎useEffect
  useEffect(() => {
    const stalker = stalkerRef.current; //「stalkerRef」が参照しているDOM要素を取得

    //=======================
    //==== ①マウス位置の取得 ===
    //=======================
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX; //現在のX軸のマウス位置を取得
      mouseY.current = e.clientY; //現在のY軸のマウス位置を取得
    };
    document.addEventListener('mousemove', handleMouseMove); //「'mousemove'が動いたらイベント処理(handleMouseMove)を実行する。」

    //===================================
    //==== ②アニメーション(ストーカー処理) ===
    //===================================
    let raf; //	requestAnimationFrameが返すIDを保存するため => cancelAnimationFrame(rafId);で使用する。コンポーネントがアンマウントされた時、ページ遷移した時に「アニメーションを止められる。」

    const animate = () => {
      stalkerX.current += (mouseX.current - stalkerX.current) * ease; //「マウスストーカーx」が【ease(0.1)割合だけマウスカーソルに追従する】
      stalkerY.current += (mouseY.current - stalkerY.current) * ease; //「マウスストーカーy」が【ease(0.1)割合だけマウスカーソルに追従する】

      stalker.style.left = `${stalkerX.current}px`; //計算した現在位置を、画面に描写する(pxで)
      stalker.style.top = `${stalkerY.current}px`;

      raf = requestAnimationFrame(animate); //requestAnimationFrameで自分を呼ぶ => ブラウザ「次の描画タイミングで animate を呼びます」
    };
    animate();

    //==============================
    //==== ③hoverを判定する(link) ===
    //==============================
    const links = document.querySelectorAll('a'); //DOMのすべてのa要素を取得

    const linkEnter = () => {
      stalker.classList.add('is-hover'); // .is-hoverを追加
    };
    const linkLeave = () => {
      stalker.classList.remove('is-hover'); // .is-hoverを外す
    };
    //⬇「links(aタグ)」に各種イベントを登録
    links.forEach((link) => {
      link.addEventListener('mouseenter', linkEnter);
      link.addEventListener('mouseleave', linkLeave);
    });

    //=======================
    //==== ④クリーンナップ ===
    //=======================
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(raf);

      links.forEach((link) => {
        link.removeEventListener('mouseenter', linkEnter);
        link.removeEventListener('mouseleave', linkLeave);
      });
    };
  }, []);

  return (
    <Stalker ref={stalkerRef}>
      <div ref={textRef} className='cursor-text'>
        view!
      </div>
    </Stalker>
  );
};

export default MouseStalker;
