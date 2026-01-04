import { useRef, useEffect } from 'react';
import areaFixedFunk from '../animations/side';

const SideFixed = ({ children, title, headerRef, sideText }) => {
  const areaRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const cleanup = areaFixedFunk(areaRef, targetRef, headerRef, 80);
    return cleanup;
  }, [headerRef]); //[headerRef]はheaderRefが変わったらこのuseEffectを再実行という意味だけど「今回だけはheaderRefはほぼ変わりません。」このuseEffectはheaderRefに依存してますよ、という意味付けだけ。

  return (
    <div ref={areaRef} style={{ position: 'relative' }}>
      <div className='flex flex-col md:flex-row'>
        {/* 左側領域で幅を確保 */}
        <div style={{ width: '300px' }}></div>
        {/* 右側領域で{children} */}
        <div style={{ width: 'calc(100% - 300px)' }}>{children}</div>
      </div>

      {/* ⬇︎実際に追従するfixed */}
      <div ref={targetRef} style={{ width: '300px' }}>
        {/* <SideFixed title='追従タイトル'などから「titleなどのpropsを受け取る。」 */}
        <h1 style={{ fontSize: '1.5em', fontWeight: 'bold', margin: '0' }}>{title}</h1>
        {/* sideText が「truthy（真)」のときだけ{sideText}を表示  */}
        {sideText && <h2 style={{ fontSize: '1.0rem' }}>{sideText}</h2>}
      </div>
    </div>
  );
};

export default SideFixed;
