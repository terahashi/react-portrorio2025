import { Wrapper, Inner } from '../common/LayoutPrimitives';
import breakpoints from '../../styles/breakpoints';
import GetInTouch from '../GetInTouch';
import styled from 'styled-components';

const ContactWrap = styled.section`
  background-color: #1e1c1c;
  padding-top: var(--res-sec-padding-top);
  padding-bottom: var(--res-sec-padding-bottom);
  @media (min-width: ${breakpoints.tablet}) {
    padding-top: var(--sec-padding-top);
    padding-bottom: var(--sec-padding-bottom);
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
