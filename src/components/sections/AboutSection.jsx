import { Wrapper, Inner } from '../common/LayoutPrimitives';
import styled from 'styled-components';

import ParagraphSection from '../ParagraphSection';
import FadeUp from '../FadeUp';
import Three from '../Three';

const AboutWrap = styled.section`
  background-color: #494949;
  padding-bottom: var(--sec-bottom-padding);
`;

const AboutSection = () => {
  return (
    <section id='about'>
      <AboutWrap>
        <Wrapper>
          <Inner>
            <ParagraphSection title='About' />
            <FadeUp
              options={{
                y: 40,
                stagger: 0.1,
                duration: 0.4,
                glitch: true,
              }}
            >
              <div className='split'>
                {'ABOUT'.split('').map((char, i) => (
                  <span key={i} className='char inline-block text-[3rem] font-bold'>
                    {char}
                  </span>
                ))}
              </div>
              <p className='char inline-block'>スクロール</p>
            </FadeUp>

            <Three />
          </Inner>
        </Wrapper>
      </AboutWrap>
    </section>
  );
};

export default AboutSection;
