import { Wrapper, Inner } from '../common/LayoutPrimitives';
import styled from 'styled-components';

import ParagraphSection from '../ParagraphSection';
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
            <ParagraphSection title='About'>
              <Three />
            </ParagraphSection>
          </Inner>
        </Wrapper>
      </AboutWrap>
    </section>
  );
};

export default AboutSection;
