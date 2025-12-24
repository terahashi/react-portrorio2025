import styled from 'styled-components';

//ScrollMouseで全体配置
const ScrollMouse = styled.div`
  position: absolute;
  right: 50px;
  bottom: 80px;

  margin-top: 30px;
  margin-inline: auto;
  width: fit-content;
  text-align: center;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  gap: 0 20px;

  //「scroll」の文字
  .scroll-text {
    display: block;
    color: #000;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.08em;
  }
  //マウスの形
  .mouse {
    width: 30px;
    height: 50px;
    border: 2px solid #000;
    border-radius: 20px;
    position: relative;
    margin-inline: auto;
    //マウスホイール
    .wheel {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: 4px;
      height: 10px;
      background: #000;
      border-radius: 3px;
      animation: scrollAnime 2s infinite;
    }
  }

  @keyframes scrollAnime {
    0% {
      opacity: 0;
      top: 15%;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top: 60%;
    }
  }
`;

const ScrollDown = () => {
  return (
    <ScrollMouse>
      <span className='scroll-text'>SCROLL TO START</span>

      <div className='mouse'>
        <span className='wheel'></span>
      </div>
    </ScrollMouse>
  );
};
export default ScrollDown;
