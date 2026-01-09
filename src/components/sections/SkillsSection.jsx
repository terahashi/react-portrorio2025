import { Wrapper, Inner } from '../common/LayoutPrimitives';
import styled from 'styled-components';

import ParagraphSection from '../ParagraphSection';
import SideFixed from '../SideFixed';
import SampleContent2 from '../SampleContent2';

const SkillsWrap = styled.section`
  background-color: #494949;
  padding-bottom: var(--sec-bottom-padding);
`;

const SkillsSection = ({ headerRef }) => {
  return (
    <section id='skills'>
      <SkillsWrap>
        <Wrapper>
          <Inner>
            <ParagraphSection title='Skills'>
              <SideFixed
                title='追従タイトル'
                sideText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo voluptate, dolor numquam exercitationem quod obcaecati sunt sint commodi laborum. Accusantium, ea. Deserunt dolorum, recusandae consequuntur nisi harum possimus quod.'
                headerRef={headerRef}
              >
                <SampleContent2 />
              </SideFixed>
            </ParagraphSection>
          </Inner>
        </Wrapper>
      </SkillsWrap>
    </section>
  );
};

export default SkillsSection;
