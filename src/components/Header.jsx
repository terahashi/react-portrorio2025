import React, { useContext } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoints from '../styles/breakpoints';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useMediaQuery from '../hooks/useMediaQuery'; //useMediaQueryカスタムフック
import ColorContext from '../contexts/ColorContext'; //ColorContext

import { Wrapper, Inner } from './common/LayoutPrimitives';
import Menu from './Menu';

//styled-components
const HeaderInner = styled(Inner)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  @media (min-width: ${breakpoints}) {
    padding: 16px;
  }
`;

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  height: var(--header-height);
  .my-logo {
    position: relative;
  }
  .pc-menu {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
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

//⬇︎useContextを使用【$isDarkをstyled-componentsに $darkという名前で渡している】
const Header = ({ headerRef }) => {
  //useContext
  const { isDark } = useContext(ColorContext);

  //useMediaQueryカスタムフックで「スマホだけ<Menu>を表示させる」
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <HeaderWrap ref={headerRef} $dark={isDark}>
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

              <a href='https://github.com/terahashi?tab=repositories' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon className='github-spin' icon={['fab', 'github']} size='3x' spin></FontAwesomeIcon>
              </a>
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
