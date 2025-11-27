//Headerは「CSS-in-JS(styled-components)で書いてみよう」
import { styled } from 'styled-components';

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  font-size: 1.8rem;
  font-weight: bold;
  z-index: 999;
  background-color: #808080;
  /* ⬇︎$darkが「trueなら白」「falseなら黒」 */
  /* useStateの初期値はfalse。$dark = falseなので「最初は'black'が選択される」 */
  color: ${(props) => (props.$dark ? 'white' : 'black')};
`;

//⬇︎Home.jsxの<Header/>で受け取った【darkをstyled-componentsに$darkという名前で渡している】
const Header = ({ dark }) => {
  return <HeaderWrap $dark={dark}>sample</HeaderWrap>;
};

export default Header;
