import Header from './Header';
import { Outlet } from 'react-router-dom';

const Layout = ({ isDark }) => {
  return (
    <>
      {/* <Header $isDark={isDark} /> */}
      <Header />
      <Outlet />
      {/* ⬆︎<Outlet/>は子コンポーネント(Home.jsxやAbout.jsx)を差し込むもの */}
    </>
  );
};

export default Layout;
