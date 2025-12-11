import { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';

//⬇︎自分で追加
//RoutesでHome.jsxを読み込む
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //「React Router バージョン6」
import Home from './pages/Home.jsx';
import Loading from './components/Loading.jsx';

function App() {
  //⬇︎ローディングアニメーションのstate
  const [loading, setLoading] = useState(true); //最初は「true」で"ローディング中"にする

  /// スクロール位置の保存 (iOS 対応)
  useEffect(() => {
    const saveScroll = () => {
      const pos = document.scrollingElement?.scrollTop ?? window.scrollY;
      sessionStorage.setItem('scrollPos', pos);
    };

    window.addEventListener('scroll', saveScroll);
    window.addEventListener('pagehide', saveScroll); // iOS でも発火
    return () => {
      window.removeEventListener('scroll', saveScroll);
      window.removeEventListener('pagehide', saveScroll);
    };
  }, []);

  // スクロール位置の復元
  useLayoutEffect(() => {
    if (!loading) {
      const saved = sessionStorage.getItem('scrollPos');
      if (saved !== null) {
        // DOM 高さ確定後に復元
        requestAnimationFrame(() => {
          window.scrollTo({ top: Number(saved), behavior: 'auto' });
        });
      }
    }
  }, [loading]);

  return (
    <>
      {/* {loading && <Loading onComplete={() => setLoading(false)} />}
      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      )} */}

      {/* Home を先にレンダリングして高さを確保 */}
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* ローディング表示 */}
      {loading && <Loading onComplete={() => setLoading(false)} />}

      {/*「BrowserRouter」は、アプリ全体を ルーティング可能にする親コンポーネント */}
      {/*「Routes」は、URLに応じて どのルートを表示するかをまとめるコンテナ */}
      {/*「Route」は、URLパスと表示するコンポーネントを ひとつひとつ紐付ける */}
    </>
  );
}

export default App;
