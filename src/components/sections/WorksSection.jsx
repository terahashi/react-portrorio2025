import { Wrapper, Inner } from '../common/LayoutPrimitives';
import breakpoints from '../../styles/breakpoints';
import styled from 'styled-components';

import FadeUp from '../FadeUp';
import Works from '../Works';

const WorkWrap = styled.section`
  background-color: #1e1c1c;
  padding-top: var(--res-sec-padding-top);
  padding-bottom: var(--res-sec-padding-bottom);
  @media (min-width: ${breakpoints.tablet}) {
    padding-top: var(--sec-padding-top);
    padding-bottom: var(--sec-padding-bottom);
  }
`;

const WorkSection = () => {
  return (
    <section id='works'>
      <WorkWrap>
        <Wrapper>
          <Inner>
            <FadeUp
              options={{
                y: 150,
                stagger: 0.12,
                duration: 0.9,
                // glitch: true,
              }}
            >
              <div>
                {'WORKS'.split('').map((char, i) => (
                  <span key={i} className='fade-split'>
                    {char}
                  </span>
                ))}
              </div>

              <p className='char'>スクロール</p>
            </FadeUp>

            <FadeUp options={{ y: 200, duration: 0.4 }}>
              <p className='fade-p md:max-w-lg lg:max-w-xl text-(--color-gray)'>
                ここに長文を入力します。 ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。ここに長文を入力します。
              </p>
            </FadeUp>

            <Works />
          </Inner>
        </Wrapper>
      </WorkWrap>
    </section>
  );
};

export default WorkSection;
