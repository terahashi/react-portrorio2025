import HeroscrambleText from './HeroscrambleText';
import TypingText from './TypingText';
import ScrollDown from './ScrollDown';
import { Wrapper, Inner } from './common/LayoutPrimitives';

const Hero = ({ targetRef }) => {
  return (
    <section ref={targetRef} className='bg-[#ffe4d7] w-full min-h-screen  pt-[var(--header-height)] relative'>
      <Wrapper>
        <Inner className='pt-[50px] md:pt-[80px]'>
          <HeroscrambleText />
          <TypingText />
          <div className='bg-custom-yellow'>
            <h1>子要素(背景黄色はbg-custom-yellowの「Tailwindcssのカスタム」)</h1>
          </div>
          <ScrollDown />
        </Inner>
      </Wrapper>
    </section>
  );
};

export default Hero;
