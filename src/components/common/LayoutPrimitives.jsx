////これは「Wrapper」や「Inner」を部品化して全てのJSXファイルで使えるようにするためのもの。
import styled from 'styled-components';

//Wrapper styled-components
const Wrapper = styled.div`
  padding-left: clamp(16px, 4vw, 32px);
  padding-right: clamp(16px, 4vw, 32px);
`;

//Inner styled-components
const Inner = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
`;

//⬇︎名前付きexport
export { Wrapper, Inner };
