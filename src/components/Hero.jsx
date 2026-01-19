import { Wrapper, Inner } from './common/LayoutPrimitives';
import HeroscrambleText from './HeroscrambleText';
import TypingText from './TypingText';
import ScrollDown from './ScrollDown';

const Hero = ({ targetRef }) => {
  return (
    <section ref={targetRef} className='bg-[#ffe4d7] w-full min-h-screen  pt-[var(--header-height)] relative'>
      <Wrapper>
        <Inner className='pt-[30px] md:pt-[50px] lg:pt-[70px] pb-[30px] md:pb-[75px] lg:pb-[75px]'>
          <HeroscrambleText />
          <div className='flex md:flex md:flex-nowrap flex-col md:flex-row md:justify-start md:items-end gap-x-0 md:gap-x-3 gap-y-5 md:gap-y-0 md:mb-[30px]'>
            <img className='w-full md:w-[320px] lg:w-[400px] pb-0 md:pb-[30px] md:mb-[0]' src='images/nature.jpg' alt='nature' />

            <div className='pb-0 md:pb-[30px] md:mb-[0] md:w-[calc(100%-(320px+170px))] lg:w-[300px]'>
              <TypingText />
            </div>

            <ScrollDown />
          </div>

          {/* <div className='bg-custom-yellow'>
            <h1>子要素(背景黄色はbg-custom-yellowの「Tailwindcssのカスタム」)</h1>
          </div> */}
        </Inner>
      </Wrapper>
    </section>
  );
};

export default Hero;
