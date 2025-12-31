import { useRef, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import animateHamburger from '../animations/HamburgerAnimation'; //hamburger.jsからGSAPアニーションをimport
import ColorContext from '../contexts/ColorContext';
import breakpoints from '../styles/breakpoints';

////「styled-components」
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
    height: 70vh;
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
          color: #000;
          text-decoration: none;
          font-size: 2rem;
          font-weight: bold;
        }
      }
    }
  }

  nav.nav2 {
    position: fixed;
    top: 70vh;
    right: 0;
    width: 100%;
    height: 30vh;
    background: #000000;
    transform: translateX(-100%);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px 24px;
    padding: 5% 3%;
    z-index: 100;
    ul {
      margin-left: 2%;
      li {
        font-size: var(--text-sm);
        color: #fff;
        text-align: left;
        a {
          font-size: var(--text-sm);
          color: #fff;
          text-decoration: none;
          &:hover {
            opacity: 0.7;
          }
        }
      }
    }
    > ul:nth-child(2) {
      margin-left: 2%;
    }
  }
`;

////⬇︎メニュー内のリンクを配列化して、データでまとめる
const menuItems = [
  { label: 'Home', hash: 'home' },
  { label: 'About', hash: 'about' },
  { label: 'Works', hash: 'works' },
  { label: 'Skills', hash: 'skills' },
  { label: 'Contact', hash: 'contact' },
];

////Menuコンポーネント。useContext使用している【$darkをCSS-in-JSに、$darkという名前で渡している】
const Menu = () => {
  //⬇︎useContext
  const { isDark } = useContext(ColorContext);

  //各種ref
  const hamburgerRef = useRef(null);
  const navRef = useRef(null);
  const nav2Ref = useRef(null);
  //⬇︎「nav1のli」を動的に管理するref
  const navLiRefs = useRef([]);
  //⬇︎「メニュー開閉」を管理するcontrollerRef
  const controllerRef = useRef(null);

  useEffect(() => {
    if (hamburgerRef.current && navRef.current && nav2Ref.current && navLiRefs.current.length > 0) {
      {
        controllerRef.current = animateHamburger(hamburgerRef, navRef, nav2Ref, navLiRefs);
      }

      return () => {
        controllerRef.current?.cleanup(); //「?」の意味はcontrollerRef.currentが存在してたらcleanup()を実行する。なかったら何もしない
      };
    }
  }, []);

  return (
    <MenuWrapper $dark={isDark}>
      <div className='hamburger' ref={hamburgerRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className='nav1' ref={navRef}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={item.hash} ref={(el) => (navLiRefs.current[index] = el)} onClick={() => controllerRef.current?.closeMenu()}>
              {item.hash === 'home' ? <Link to={`/`}>{item.label}</Link> : <Link to={`/#${item.hash}`}>{item.label}</Link>}
            </li>
          ))}
        </ul>
      </nav>

      <nav className='nav2' ref={nav2Ref}>
        <ul>
          <li>
            <a href='/'>リンク・Welcome</a>
          </li>
          <li>Welcome GSAPメニュー!</li>
          <li>Welcome GSAPメニュー!</li>
        </ul>
        <ul>
          <li>Welcome GSAPメニュー!</li>
          <li>Welcome GSAPメニュー!</li>
        </ul>
      </nav>
    </MenuWrapper>
  );
};

export default Menu;
