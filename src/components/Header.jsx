import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import useMediaQuery from '../hooks/useMediaQuery'; //useMediaQueryカスタムフック
import ColorContext from '../contexts/ColorContext'; //ColorContext

import { Wrapper, Inner } from './common/LayoutPrimitives';
import Menu from './Menu';

//「styled-components(CSS-in-JS))で書いてみよう」
const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  .my-logo {
    position: relative;
  }
  .pc-menu {
    display: flex;
  }
  a {
    font-size: var(--text-sm);
    text-decoration: none;
    transition: color 0.8s ease; /* ⬅︎colorプロパティだけ滑らかにスピードを変化させる */
    /* ⬇︎$darkが「trueなら白」「falseなら黒」 */
    /* useStateの初期値はfalse。$dark = falseなので「最初は'black'が選択される」 */
    color: ${(props) => (props.$dark ? '#fff' : '#000')};
  }
`;

const HeaderInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//⬇︎useContextを使用【$isDarkをstyled-componentsに $darkという名前で渡している】
const Header = ({ headerRef }) => {
  //useContext
  const { isDark } = useContext(ColorContext);

  //useMediaQueryカスタムフックで「スマホだけ<Menu>を表示させる」
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <HeaderWrap ref={headerRef} $dark={isDark} className='p-4'>
      <Wrapper>
        <HeaderInner>
          <div className='my-logo'>
            <Link to='/'>MYPORTFOLIO</Link>
          </div>

          {!isMobile && (
            <div className='pc-menu gap-x-4 '>
              <Link to='/#works'>Works</Link>
              <Link to='/#about'>About</Link>
              <Link to='/#skills'>Skills</Link>
            </div>
          )}

          {/* ⬇︎Menuを読み込みで<Header/>内に配置する */}
          {isMobile && <Menu $dark={isDark} />}
        </HeaderInner>
      </Wrapper>
    </HeaderWrap>
  );
};

export default Header;
