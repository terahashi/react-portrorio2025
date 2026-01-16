import { Wrapper, Inner } from '../common/LayoutPrimitives';
import breakpoints from '../../styles/breakpoints';
import GetInTouch from '../GetInTouch';
import styled from 'styled-components';

const ContactWrap = styled.section`
  background-color: #1e1c1c;
  padding-top: var(--res-sec-top-padding);
  padding-bottom: var(--res-sec-bottom-padding);
  @media (min-width: ${breakpoints.tablet}) {
    padding-top: var(--sec-top-padding);
    padding-bottom: var(--sec-bottom-padding);
  }
`;

const ContactSection = () => {
  return (
    <section id='contact'>
      <ContactWrap>
        <Wrapper>
          <Inner>
            <GetInTouch />
          </Inner>
        </Wrapper>
      </ContactWrap>
    </section>
  );
};

export default ContactSection;
