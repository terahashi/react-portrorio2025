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
