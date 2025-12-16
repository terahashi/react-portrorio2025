import { useRef, useEffect, Children } from 'react';
import areaFixedFunk from '../animations/side';

const SideFixed = ({ children, headerRef }) => {
  const areaRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const cleanup = areaFixedFunk(areaRef, targetRef, headerRef, 80);
    return cleanup;
  }, [headerRef]); //[headerRef]はheaderRefが変わったらこのuseEffectを再実行という意味だけど「今回だけはheaderRefはほぼ変わりません。」このuseEffectはheaderRefに依存してますよ、という意味付けだけ。

  return (
    <div ref={areaRef} style={{ position: 'relative' }}>
      <div style={{ display: 'flex' }}>
        {/* 左側領域 レイアウト用の箱を用意（幅を確保） */}
        <div style={{ width: '300px' }}></div>
        {/* 右側領域　{children}のコンテンツ */}
        <div style={{ width: 'calc(100% - 300px)' }}>{children}</div>
      </div>

      {/* ⬇︎⭐️実際に追従する要素（fixedになる） */}
      <div ref={targetRef} style={{ width: '30%' }}>
        <h1>追従タイトル</h1>
      </div>
    </div>
  );
};

export default SideFixed;
