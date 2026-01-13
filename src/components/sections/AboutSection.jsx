import { Wrapper, Inner } from '../common/LayoutPrimitives';
import styled from 'styled-components';

import ParagraphSection from '../ParagraphSection';
import FadeUp from '../FadeUp';
import Three from '../Three';

const AboutWrap = styled.section`
  background-color: #1e1c1c;
  padding-top: var(--sec-top-padding);
  padding-bottom: var(--sec-bottom-padding);
`;

const AboutSection = () => {
  return (
    <section id='about'>
      <AboutWrap>
        <Wrapper>
          <Inner>
            {/* <ParagraphSection title='About' /> */}
            <FadeUp
              options={{
                y: 150,
                stagger: 0.12,
                duration: 0.9,
                // glitch: true,
              }}
            >
              <div>
                {'ABOUT'.split('').map((char, i) => (
                  <span key={i} className='fade-split'>
                    {char}
                  </span>
                ))}
              </div>

              <p className='char'>スクロール</p>
            </FadeUp>

            <FadeUp options={{ y: 200, duration: 0.4 }}>
              <p className='fade-p md:max-w-lg lg:max-w-xl '>
                ここに長文を入力します。 ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。
              </p>
            </FadeUp>

            <Three />
          </Inner>
        </Wrapper>
      </AboutWrap>
    </section>
  );
};

export default AboutSection;
