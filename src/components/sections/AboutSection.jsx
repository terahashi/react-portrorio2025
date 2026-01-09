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
                y: 60,
                stagger: 0.1,
                duration: 0.4,
              }}
            >
              <h1 className='split'>
                {'ABOUT'.split('').map((char, i) => (
                  <div key={i} className='char inline-block'>
                    {char}
                  </div>
                ))}
              </h1>
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
