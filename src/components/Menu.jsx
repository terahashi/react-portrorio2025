import { useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom'; //イベントハンドラー内で遷移したい場合に使うのが「useNavigate」
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import animateHamburger from '../animations/HamburgerAnimation'; //hamburger.jsからGSAPアニーションをimport
import ColorContext from '../contexts/ColorContext';
import breakpoints from '../styles/breakpoints';

////styled-components
const MenuWrapper = styled.div`
  .hamburger {
    position: relative; //static以外のposition(relative)で「z-indexを有効化」する
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    z-index: 1000;
    @media (min-width: ${breakpoints.tablet}) {
      display: none;
    }
    @media (min-width: ${breakpoints.pc}) {
      display: none;
    }
    span {
      display: block;
      height: 3px;
      background: rgb(255, 255, 255);
      border-radius: 2px;

      //⬇︎$darkでspanのみを「白/黒」に切り替え
      //useIntersection.js(IntersectionScrollObserver)のカスタムフック機能。
      background: ${(props) => (props.$dark ? '#fff' : '#000')};
      transition: background 0.8s ease;
    }
  }
  nav.nav1 {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 65vh;
    background: #d5ab95;
    transform: translateX(100%);
    z-index: 100;
    ul {
      text-align: center;
      list-style: none;
      padding: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      li {
        margin-bottom: 15px;
        a {
          font-size: 2rem;
          color: #000;
          text-decoration: none;
          font-weight: bold;
        }
      }
    }
  }

  nav.nav2 {
    position: fixed;
    top: 65vh;
    right: 0;
    width: 100%;
    height: 35vh;
    background: #000000;
    transform: translateX(-100%);
    gap: 6px 0;
    padding: 16px 32px;
    z-index: 100;
    ul {
      margin-bottom: 5px;
      li {
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
        text-align: left;
        cursor: pointer;
        a {
          font-size: inherit;
          color: #fff;
          text-decoration: none;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    > ul:nth-child(3) {
      margin-bottom: 0;
      li {
        font-size: 1.2rem;
        color: var(--color-white);
        font-weight: 300;
        > span {
          font-size: inherit;
          color: var(--color-gray);
        }
      }
    }

    ul.social {
      margin-bottom: 5px;
      li {
        font-size: 0.9rem;
        color: var(--color-white);
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        gap: 0 10px;
        a {
          display: block;
        }
      }
    }
  }
`;

//⬇︎menuItems配列データ。メニュー内のリンクを配列化する。
const menuItems = [
  { label: 'Home', hash: 'home' },
  { label: 'About', hash: 'about' },
  { label: 'Works', hash: 'works' },
  { label: 'Skills', hash: 'skills' },
  { label: 'Contact', hash: 'contact' },
];

////Menuコンポーネント
const Menu = () => {
  //⬇︎useContextを使用して【$darkをstyled-componentsに、$darkという名前で渡している】
  const { isDark } = useContext(ColorContext);

  //⬇︎「menuItems配列データを"使わない"場合を想定したリンク遷移」
  //・まずuseNavigateを作成。
  //コードを作成する理由1: menuItems配列データを"使わない"場合を想定したリンク遷移は、メニューが閉じないバグが発生するため。(Linkを使うとメニューが閉じないバグが発生するため)
  //コードを作成する理由2: menuItems配列データを"使わない"場合を想定したリンク遷移は、メニューを閉じただけなのにトップに戻るバグが発生するため。
  const navigate = useNavigate();

  //⬇︎「menuItems配列データを"使わない"場合を想定したリンク遷移」のイベントハンドラー。
  //・リンクがクリックされたら、メニューを閉じて、閉じ終わったらその時に navigate(path) を実行して遷移する。
  const handleLinkClick = (path) => {
    controllerRef.current?.closeMenu(() => {
      //⭐️HamburgerAnimation.jsファイルの、closeMenu関数に「navigate(path) を コールバック関数扱いでcallbackNavigate」として渡す
      //メニューが閉じ終わったら「navigate('/#works')へ遷移する」
      navigate(path);
    });
  };

  //各種ref
  const hamburgerRef = useRef(null);
  const navRef = useRef(null);
  const nav2Ref = useRef(null);
  //⬇︎「nav1のli」を動的に管理するref。初期値は配列[]
  const navLiRefs = useRef([]);
  //⬇︎「メニュー開閉」を管理するcontrollerRef
  const controllerRef = useRef(null);

  useEffect(() => {
    if (hamburgerRef.current && navRef.current && nav2Ref.current && navLiRefs.current.length > 0) {
      {
        controllerRef.current = animateHamburger(hamburgerRef, navRef, nav2Ref, navLiRefs);
      }
      //⬇︎クリーンナップ処理
      return () => {
        controllerRef.current?.cleanup(); //「?」の意味はcontrollerRef.currentが存在してたらcleanup()を実行する。なかったら何もしない
      };
    }
  }, []);

  //・JSX
  return (
    <MenuWrapper $dark={isDark}>
      <div className='hamburger' ref={hamburgerRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className='nav1' ref={navRef}>
        <ul>
          {/* ⬇︎menuItems配列データを"使う"場合のリンク遷移 */}
          {menuItems.map((item, index) => (
            <li key={item.hash} ref={(el) => (navLiRefs.current[index] = el)} onClick={() => controllerRef.current?.closeMenu()}>
              {item.hash === 'home' ? <Link to={`/`}>{item.label}</Link> : <Link to={`/#${item.hash}`}>{item.label}</Link>}
            </li>
          ))}
        </ul>
      </nav>

      <nav className='nav2' ref={nav2Ref}>
        <ul>
          {/* ⬇︎menuItems配列データを"使わない"場合のリンク遷移 */}
          <li onClick={() => handleLinkClick('/')}>MYPORTFOLIO</li>
        </ul>

        <ul className='social'>
          <li>
            <a href='https://github.com/terahashi?tab=repositories' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={['fab', 'github']} size='2x'></FontAwesomeIcon>
            </a>
            <a href='https://github.com/terahashi?tab=repositories' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={['fab', 'github']} size='2x'></FontAwesomeIcon>
            </a>
          </li>
        </ul>

        <ul>
          <li>
            Hi, I’m Takahashi, <span>a web front-end engineer working with React and JavaScript.</span>
          </li>
        </ul>
      </nav>
    </MenuWrapper>
  );
};

export default Menu;
