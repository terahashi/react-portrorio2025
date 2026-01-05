// src/components/Hero.jsx
import HeroscrambleText from './HeroscrambleText';
import TypingText from './TypingText';
import ScrollDown from './ScrollDown';

const Hero = ({ targetRef }) => {
  return (
    <div ref={targetRef} className='bg-[#ffe4d7] w-full h-screen relative'>
      <HeroscrambleText />
      <TypingText />
      <div className='bg-custom-yellow'>
        <h1>子要素(背景黄色はbg-custom-yellowの「Tailwindcssのカスタム」)</h1>
      </div>
      <ScrollDown />
    </div>
  );
};

export default Hero;
