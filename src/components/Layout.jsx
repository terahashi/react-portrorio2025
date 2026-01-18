import { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const headerRef = useRef(null); //追従タイトル(side.js)で使用するため、HeaderのuseRef(のDOM)を取得

  return (
    <>
      <Header headerRef={headerRef} />
      <Outlet context={{ headerRef }} />
      <Footer />
      {/* ⬆︎<Outlet/>は子コンポーネント(Home.jsxやAbout.jsx)を差し込むもの */}
    </>
  );
};

export default Layout;
