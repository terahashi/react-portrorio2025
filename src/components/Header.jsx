//Headerは「CSS-in-JS(styled-components)で書いてみよう」
import Menu from './Menu';
import { styled } from 'styled-components';

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row; //* 水平 横並び */
  justify-content: space-between; //* 水平 両端揃え */
  align-items: center; //* 垂直 中央揃え */
  z-index: 1000;
  /* background-color: #808080; */

  transition: color 0.3s ease;
  /* ⬇︎$darkが「trueなら白」「falseなら黒」 */
  /* useStateの初期値はfalse。$dark = falseなので「最初は'black'が選択される」 */
  /* color: ${(props) => (props.$dark ? '#fff' : '#000')}; */

  a {
    font-size: 1.2rem;
    text-decoration: none;
    /* ⬇︎$darkが「trueなら白」「falseなら黒」 */
    /* useStateの初期値はfalse。$dark = falseなので「最初は'black'が選択される」 */
    color: ${(props) => (props.$dark ? '#fff' : '#000')};
  }
`;

//⬇︎Home.jsxの<Header />から受け取った【$isDarkをstyled-componentsに $darkという名前で渡している】
const Header = ({ $isDark }) => {
  return (
    <HeaderWrap $dark={$isDark}>
      <a href='/'>MySite</a>
      <a href='/'>MySite</a>
      <a href='/'>MySite</a>
      {/*⬇︎menuをHeaderWrap内で読み込み */}
      <Menu />
    </HeaderWrap>
  );
};

export default Header;
