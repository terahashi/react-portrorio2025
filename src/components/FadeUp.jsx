import { useEffect, useRef } from 'react';
import fadeUp from '../animations/fadeUp';

const FadeUp = ({ title, children, options }) => {
  //useRefを作成
  const FadeRef = useRef(null);

  //useEffect
  useEffect(() => {
    const root = FadeRef.current;
    if (!root) return;

    // ① FadeRefのDOMの「h1を全て取得。」
    fadeUp(root, root.querySelectorAll('h1'), {
      y: 40,
      duration: 0.6,
    });

    // ②  FadeRefのDOM「charを全て取得。」
    fadeUp(root, root.querySelectorAll('.char'), options);
  }, []);

  return (
    <div ref={FadeRef} className='overflow-hidden'>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default FadeUp;
