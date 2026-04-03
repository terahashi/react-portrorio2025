import { Wrapper, Inner } from '../common/LayoutPrimitives';
import breakpoints from '../../styles/breakpoints';
import styled from 'styled-components';

// import ParagraphSection from '../ParagraphSection';
import FadeUp from '../FadeUp';
// import Three from '../Three';

import { lazy, Suspense } from 'react'; //遅延読み込み(lazy loading)
const Three = lazy(() => import('../Three')); //これで「遅延読み込み完了。Threeはすぐ読み込まれない。」

const AboutWrap = styled.section`
  background-color: #1e1c1c;
  padding-top: var(--res-sec-padding-top);
  padding-bottom: var(--res-sec-padding-bottom);
  @media (min-width: ${breakpoints.tablet}) {
    padding-top: var(--sec-padding-top);
    padding-bottom: var(--sec-padding-bottom);
  }
`;

const AboutSection = () => {
  return (
    <section id='about'>
      <AboutWrap>
        <Wrapper>
          <Inner>
            {/* <ParagraphSection title='ABOUT' /> */}

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

              <p className='char title__ja'>私のこと</p>
            </FadeUp>

            {/* <FadeUp options={{ y: 200, duration: 0.4 }}>
              <p className='fade-p md:max-w-lg lg:max-w-xl text-(--color-gray)'>
                ここに長文を入力します。 ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。
              </p>
            </FadeUp> */}

            {/* ⬇︎About文言+3D */}
            {/* <Three /> */}
            <Suspense fallback={<div style={{ height: '300px' }} />}>
              <Three />
            </Suspense>
          </Inner>
        </Wrapper>
      </AboutWrap>
    </section>
  );
};

export default AboutSection;
