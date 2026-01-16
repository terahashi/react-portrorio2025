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
      <div ref={targetRef} className='mb-0 w-full md:w-full lg:w-[400px]'>
        {/* <SideFixed title='追従タイトル'などから「titleなどのpropsを受け取る。」 */}
        <h1 className='text-[2.5rem] md:text-[3rem] font-extrabold md:mb-5'>{title}</h1>
        {/* sideText が「truthy（真)」のときだけ{sideText}を表示  */}
        {sideText && <h3 className='text-(--color-gray)'>{sideText}</h3>}
      </div>

      {/* ⬇︎1024px(lg以上を超えないように) */}
      <div className='flex justify-between flex-col lg:flex-row gap-y-5 md:gap-y-0 gap-x-0 md:gap-x-10'>
        {/* 左側領域で幅を確保 */}
        <div className='w-full md:w-full lg:w-[400px]'></div>
        {/* 右側領域で{children} */}
        <div className='flex-1 w-full lg:max-w-[700px]'>{children}</div>
      </div>
    </div>
  );
};

export default SideFixed;
