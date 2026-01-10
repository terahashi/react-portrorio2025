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
          <div className='flex-none md:flex md:flex-nowrap md:flex-row md:justify-start md:items-end md:gap-x-3 md:mb-[30px]'>
            <img className='w-full md:w-[400px] mb-[30px] md:mb-[0]' src='images/nature.jpg' alt='nature' />

            <div className='mb-[30px] md:mb-[0] md:w-[350px]'>
              <TypingText />
            </div>

            <ScrollDown />
          </div>
          <div className='bg-custom-yellow'>
            <h1>子要素(背景黄色はbg-custom-yellowの「Tailwindcssのカスタム」)</h1>
          </div>
        </Inner>
      </Wrapper>
    </section>
  );
};

export default Hero;
