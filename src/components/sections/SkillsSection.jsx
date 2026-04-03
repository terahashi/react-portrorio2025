import { Wrapper, Inner } from '../common/LayoutPrimitives';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

import FadeUp from '../FadeUp';
import SideFixed from '../SideFixed';
import Skillslist from '../SkillsList';

const SkillsWrap = styled.section`
  background-color: #1e1c1c;
  padding-top: var(--res-sec-padding-top);
  padding-bottom: var(--res-sec-padding-bottom);
  @media (min-width: ${breakpoints.tablet}) {
    padding-top: var(--sec-padding-top);
    padding-bottom: var(--sec-padding-bottom);
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

              <p className='char title__ja'>技術</p>
            </FadeUp>

            <p className='sub-text pb-[var(--res-sec-padding-bottom)] md:pb-[var(--sec-padding-bottom)] md:max-w-lg lg:max-w-xl'>
              これまでの開発経験を通して習得したスキルです。独学も含めています。
              <br />
            </p>

            <SideFixed
              title='<Cording />'
              // sideText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo voluptate, dolor numquam exercitationem quod obcaecati sunt sint commodi laborum. Accusantium, ea. Deserunt dolorum, recusandae consequuntur nisi harum possimus quod.'
              headerRef={headerRef}
            >
              <Skillslist />
            </SideFixed>
          </Inner>
        </Wrapper>
      </SkillsWrap>
    </section>
  );
};

export default SkillsSection;
