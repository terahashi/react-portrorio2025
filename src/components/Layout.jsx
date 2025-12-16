import Header from './Header';
import { Outlet } from 'react-router-dom';
import { useRef } from 'react';

const Layout = () => {
  const headerRef = useRef(null); //追従タイトル(side.js)で使用するため、HeaderのuseRef(のDOM)を取得
  return (
    <>
      <Header headerRef={headerRef} />
      <Outlet context={{ headerRef }} />
      {/* ⬆︎<Outlet/>は子コンポーネント(Home.jsxやAbout.jsx)を差し込むもの */}
    </>
  );
};

export default Layout;
