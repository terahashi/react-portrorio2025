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
      {/* ⬇︎実際に追従するfixed */}
      <div ref={targetRef} className='mb-20 md:mb-0 w-full md:w-[300px]'>
        {/* <SideFixed title='追従タイトル'などから「titleなどのpropsを受け取る。」 */}
        <h1>{title}</h1>
        {/* sideText が「truthy（真)」のときだけ{sideText}を表示  */}
        {sideText && <h3>{sideText}</h3>}
      </div>

      {/* ⬇︎display: flexで横並び */}
      <div className='flex justify-between gap-8 md:gap-16 flex-col md:flex-row'>
        {/* 左側領域で幅を確保 */}
        <div style={{ width: '300px' }}></div>
        {/* 右側領域で{children} */}
        <div className='md:w-[calc(100%-300px)]'>{children}</div>
      </div>
    </div>
  );
};

export default SideFixed;
