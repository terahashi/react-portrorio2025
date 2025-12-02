import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

//⬇︎自分で追加
//RoutesでHome.jsxを読み込む
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    </>
  );
}

export default App;
