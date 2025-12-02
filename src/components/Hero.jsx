// src/components/Hero.jsx
import HeroscrambleText from './HeroscrambleText';
import TypingText from './TypingText';

const Hero = ({ targetRef }) => {
  return (
    <div ref={targetRef} className='bg-[#f0cebd] w-full h-screen'>
      <HeroscrambleText />
      <TypingText />
      <div className='bg-custom-yellow'>
        <h1>子要素(背景黄色はbg-custom-yellowの「Tailwindcssのカスタム」)</h1>
      </div>
    </div>
  );
};

export default Hero;
