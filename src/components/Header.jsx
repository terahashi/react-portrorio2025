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
  /* background-color: #808080; */
  transition: color 0.3s ease;
  /* ⬇︎$darkが「trueなら白」「falseなら黒」 */
  /* useStateの初期値はfalse。$dark = falseなので「最初は'black'が選択される」 */
  color: ${(props) => (props.$dark ? '#fff' : '#000')};
`;
//⬇︎Home.jsxの<Header />から受け取った【$isDarkをstyled-componentsに $darkという名前で渡している】
const Header = ({ $isDark }) => {
  return <HeaderWrap $dark={$isDark}>sample</HeaderWrap>;
};
export default Header;
