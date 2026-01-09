import { Wrapper, Inner } from '../common/LayoutPrimitives';
import styled from 'styled-components';

import ParagraphSection from '../ParagraphSection';
import Works from '../Works';

const WorkWrap = styled.section`
  background-color: #494949;
  padding-bottom: var(--sec-bottom-padding);
`;

const WorkSection = () => {
  return (
    <section id='works'>
      <WorkWrap>
        <Wrapper>
          <Inner>
            <ParagraphSection title='Works'>
              <Works />
            </ParagraphSection>
          </Inner>
        </Wrapper>
      </WorkWrap>
    </section>
  );
};

export default WorkSection;
