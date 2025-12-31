import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const target = document.querySelector(hash);
    if (!target) return;

    // ⬇︎🔑 SideFixed の初期 checkFixed() より後に確実に実行させる
    const timer = setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth' });
    }, 50);

    // 念のためクリーンアップ
    return () => clearTimeout(timer);
  }, [hash]);

  return null;
};

export default ScrollToHash;
