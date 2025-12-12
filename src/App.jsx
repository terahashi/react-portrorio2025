import { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';

//⬇︎自分で追加
//RoutesでHome.jsxを読み込む
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //「React Router バージョン6」
import ColorContext from './contexts/ColorContext.js';

import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Loading from './components/Loading.jsx';

function App() {
  //⬇︎ローディングアニメーションのstate
  const [loading, setLoading] = useState(true); //最初は「true」で"ローディング中"にする

  //⬇︎Headerの文字色管理のstate
  const [isDark, setIsDark] = useState(false); //初期値は「false」なのでHeaderは"黒文字"になる

  return (
    <>
      {/* useContextを使用 */}
      <ColorContext.Provider value={{ isDark, setIsDark }}>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout isDark={isDark} />}>
              <Route path='/' element={<Home setIsDark={setIsDark} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ColorContext.Provider>

      {/* ⬇︎ローディングアニメは上から覆いかぶさるだけ リッチな演出として実装する */}
      {loading && <Loading onComplete={() => setLoading(false)} />}

      {/*「BrowserRouter」は、アプリ全体を ルーティング可能にする親コンポーネント */}
      {/*「Routes」は、URLに応じて どのルートを表示するかをまとめるコンテナ */}
      {/*「Route」は、URLパスと表示するコンポーネントを ひとつひとつ紐付ける */}
    </>
  );
}

export default App;
