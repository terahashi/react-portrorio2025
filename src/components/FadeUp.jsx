import { useEffect, useRef } from 'react';
import fadeUp from '../animations/fadeUp';

const FadeUp = ({ title, children, options }) => {
  //useRefを作成
  const FadeRef = useRef(null);

  //useEffectで描画後に実行
  useEffect(() => {
    const root = FadeRef.current;
    if (!root) return;

    // ① FadeRefのDOMの「タイトル部分の.splitを全て取得。」
    fadeUp(root, root.querySelectorAll('.split'), {
      y: 80,
      //duration: 5, //duration（アニメ1つの所要時間が5秒と遅い）
    });

    // ② FadeRefのDOM「.charを全て取得。」
    fadeUp(root, root.querySelectorAll('.char'), options);
  }, []);

  return (
    <div ref={FadeRef} className='overflow-hidden mb-[30px]'>
      {title}
      {children}
    </div>
  );
};

export default FadeUp;
