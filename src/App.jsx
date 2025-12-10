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

  //・ページ更新でスクロール位置を保存する
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem('scrollPos', window.scrollY);
    };
    window.addEventListener('beforeunload', saveScroll);
    return () => window.removeEventListener('beforeunload', saveScroll);
  }, []);

  //・ページ更新でローディングアニメ終了後にスクロール復元
  //useLayoutEffectで「DOMが描画される直前に」スクロール位置を先にセットし「チラつき」を防ぐ。
  useLayoutEffect(() => {
    if (!loading) {
      const saved = sessionStorage.getItem('scrollPos');
      if (saved !== null) {
        window.scrollTo(0, Number(saved));
      }
    }
  }, [loading]); //⬅︎loadingがfalseになったタイミングで実行

  return (
    <>
      {/* ⬇︎ローディングアニメーション */}
      {loading && <Loading onComplete={() => setLoading(false)} />}

      {/* ⬇︎!loading(true扱い)= loadingがfalseなら「真(true)」という意味なので = <Home/>を表示させる。 */}
      {!loading && (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      )}

      {/*「BrowserRouter」は、アプリ全体を ルーティング可能にする親コンポーネント */}
      {/*「Routes」は、URLに応じて どのルートを表示するかをまとめるコンテナ */}
      {/*「Route」は、URLパスと表示するコンポーネントを ひとつひとつ紐付ける */}
    </>
  );
}

export default App;
