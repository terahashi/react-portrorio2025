import { useState } from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; //React Router バージョン6
import ColorContext from './contexts/ColorContext.js'; //useContext(ColorContext)
import './icons/fontAwesome.js';

import MouseStalker from './components/MouseStalker.jsx'; //マウスストーカー追加
import ScrollToTop from './components/common/ScrollToTop.jsx'; //ページ遷移時に「最上部へスクロールする」
import ScrollToHash from './components/common/ScrollToHash.jsx';

import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Loading from './components/Loading.jsx';
import WorksDetail from './pages/Works/WorksDetail.jsx'; //作品works詳細ページ
import NotFound404 from './pages/NotFound404.jsx';

function App() {
  //⬇︎useContext(ColorContext)でHeaderの文字色管理
  const [isDark, setIsDark] = useState(false); //初期値は「false」なのでHeaderは黒文字になる

  //⬇︎ローディングアニメーションのstate
  const [loading, setLoading] = useState(true); //最初は「true」で"ローディング中"にする

  return (
    <>
      {/* ⬇︎マウスストーカー */}
      <MouseStalker />

      {/* useContextの「ColorContext.Provider」を使用する */}
      <ColorContext.Provider value={{ isDark, setIsDark }}>
        <BrowserRouter>
          {/* ⬇︎ページ遷移時に「ページ最上部に戻る」 */}
          <ScrollToTop />

          {/* ⬇︎hashを監視してスクロールする */}
          <ScrollToHash />

          <Routes>
            <Route element={<Layout isDark={isDark} />}>
              {/* 初期ローディングでは<Home>は表示されない */}
              <Route path='/' element={!loading && <Home setIsDark={setIsDark} />} />

              {/* Works詳細ページ(/worksはルーティングで決めた固定パス。) */}
              <Route path='/works/:id' element={<WorksDetail />} />

              {/* 🔥404ページ */}
              <Route path='*' element={<NotFound404 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorContext.Provider>

      {/* ⬇︎ローディングアニメは上から覆いかぶさるだけ。論理AND演算子!loading && で「初期ローディングは<Home>は表示されない」*/}
      {loading && <Loading onComplete={() => setLoading(false)} />}

      {/*「BrowserRouter」は、アプリ全体を ルーティング可能にする親コンポーネント */}
      {/*「Routes」は、URLに応じて どのルートを表示するかをまとめるコンテナ */}
      {/*「Route」は、URLパスと表示するコンポーネントを ひとつひとつ紐付ける */}
    </>
  );
}

export default App;
