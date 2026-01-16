import { Wrapper, Inner } from '../common/LayoutPrimitives';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

import FadeUp from '../FadeUp';
import SideFixed from '../SideFixed';
import Skillslist from '../SkillsList';

import SampleContent2 from '../SampleContent2';

const SkillsWrap = styled.section`
  background-color: #1e1c1c;
  padding-top: var(--res-sec-top-padding);
  padding-bottom: var(--res-sec-bottom-padding);
  @media (min-width: ${breakpoints.tablet}) {
    padding-top: var(--sec-top-padding);
    padding-bottom: var(--sec-bottom-padding);
  }
`;

const SkillsSection = ({ headerRef }) => {
  return (
    <section id='skills'>
      <SkillsWrap>
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
                {'SKILLS'.split('').map((char, i) => (
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

            <SideFixed
              title='<Cording />'
              // sideText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo voluptate, dolor numquam exercitationem quod obcaecati sunt sint commodi laborum. Accusantium, ea. Deserunt dolorum, recusandae consequuntur nisi harum possimus quod.'
              headerRef={headerRef}
            >
              <Skillslist />
              <SampleContent2 />
            </SideFixed>
          </Inner>
        </Wrapper>
      </SkillsWrap>
    </section>
  );
};

export default SkillsSection;
