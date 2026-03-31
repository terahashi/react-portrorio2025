////これは「Wrapper」や「Inner」を部品化して全てのJSXファイルで使えるようにするためのもの。
import styled from 'styled-components';

//Wrapper
const Wrapper = styled.div`
  padding-top: clamp(16px, 4vw, 24px);
  padding-bottom: clamp(16px, 4vw, 24px);
  padding-left: clamp(16px, 4vw, 32px);
  padding-right: clamp(16px, 4vw, 32px);
`;

//Inner(max-width: 1280px)
const Inner = styled.div`
  width: 100%;
  max-width: var(--layout-max-width);
  margin: 0 auto;
`;

//⬇︎名前付きexport
export { Wrapper, Inner };
