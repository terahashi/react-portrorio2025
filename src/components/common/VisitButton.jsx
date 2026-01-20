import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

const VisitWebsite = styled.button`
  background-color: #ffffff;
  /* padding: 7px 14px; */
  margin: 0 auto;
  display: block;
  border-radius: 9999px;
  margin-bottom: 70px;
  transition: 0.3s ease-in-out;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  @media (any-hover: hover) {
    //・端末にhoverできる入力デバイス(マウス)があれば、pcやタブレットでhoverが作動。
    &:hover {
      border: 1px solid #0fd329;
      transform: translateY(-2px);
      background-color: #000;
      color: #fff;
    }
  }
  @media (min-width: ${breakpoints.tablet}) {
    margin-bottom: 100px;
  }
  @media (min-width: ${breakpoints.pc}) {
    margin-bottom: 0;
  }
`;

const VisitButton = ({ visitsite, url }) => {
  return (
    <VisitWebsite data-stalker onClick={() => window.open(url, '_blank', 'noopener,noreferrer')}>
      {visitsite}
    </VisitWebsite>
  );
};
export default VisitButton;
