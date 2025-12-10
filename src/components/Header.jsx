import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { styled } from 'styled-components';

//「styled-components(CSS-in-JS))で書いてみよう」
const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row; //* 水平 横並び */
  justify-content: space-between; //* 水平 両端揃え */
  align-items: center; //* 垂直 中央揃え */
  z-index: 1000;
  /* background-color: #808080; */

  a {
    font-size: var(--text-sm);
    text-decoration: none;
    transition: color 0.8s ease; /* 色だけ滑らかにスピードを変化させる */
    /* ⬇︎$darkが「trueなら白」「falseなら黒」 */
    /* useStateの初期値はfalse。$dark = falseなので「最初は'black'が選択される」 */
    color: ${(props) => (props.$dark ? '#fff' : '#000')};
  }
`;

//⬇︎Home.jsxの<Header $isDark={!isIntersecting} />から受け取った【$isDarkをstyled-componentsに $darkという名前で渡している】
const Header = ({ $isDark }) => {
  return (
    <HeaderWrap $dark={$isDark}>
      <Link to='home'>Home</Link>
      <Link to='/'>中身は/</Link>

      <a href='/'>MySite</a>

      {/* ⬇︎Menuを読み込みで<Header/>内に配置する */}
      <Menu $dark={$isDark} />
    </HeaderWrap>
  );
};

export default Header;
