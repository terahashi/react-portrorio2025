import { Wrapper, Inner } from '../common/LayoutPrimitives';
import styled from 'styled-components';

import ParagraphSection from '../ParagraphSection';

import FadeUp from '../FadeUp';
import Works from '../Works';

const WorkWrap = styled.section`
  background-color: #1e1c1c;
  padding-top: var(--sec-top-padding);
  padding-bottom: var(--sec-bottom-padding);
`;

const WorkSection = () => {
  return (
    <section id='works'>
      <WorkWrap>
        <Wrapper>
          <Inner>
            {/* <ParagraphSection title='Works' /> */}

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
