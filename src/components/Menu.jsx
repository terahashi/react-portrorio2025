import React, { useRef, useEffect } from 'react';
import { animateHamburger } from '../animations/hamburger';
import { styled } from 'styled-components';

const MenuWrapper = styled.div`
  .hamburger {
    cursor: pointer;
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1000;
    span {
      display: block;
      height: 3px;
      background: #fff;
      border-radius: 2px;
      z-index: 1000;
    }
  }

  nav.nav1 {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 80vh;
    background: #000;
    transform: translateX(100%);
    z-index: 100;
    ul {
      list-style: none;
      padding: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      li {
        margin-bottom: 15px;
        a {
          color: #fff;
          text-decoration: none;
          font-size: 2rem;
          font-weight: bold;
        }
      }
    }
  }

  nav.nav2 {
    position: fixed;
    top: 80vh;
    right: 0;
    width: 100%;
    height: 20vh;
    background: #f0cebd;
    transform: translateX(-100%);
    z-index: 100;
    ul {
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
`;

const Menu = () => {
  const hamburgerRef = useRef(null);
  const navRef = useRef(null);
  const nav2Ref = useRef(null);
  const navLiRefs = useRef(document.querySelectorAll('nav ul li'));

  useEffect(() => {
    if (hamburgerRef.current && navRef.current && nav2Ref.current) {
      animateHamburger(hamburgerRef, navRef, nav2Ref, navLiRefs);
    }
  }, []);

  return (
    <MenuWrapper>
      <div className='hamburger' ref={hamburgerRef}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className='nav1' ref={navRef}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/works'>Works</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </nav>
      <nav className='nav2' ref={nav2Ref}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
        </ul>
      </nav>
    </MenuWrapper>
  );
};

export default Menu;
