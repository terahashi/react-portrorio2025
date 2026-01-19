import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Wrapper, Inner } from './LayoutPrimitives';

const PageTopWrap = styled.div`
  background-color: #1e1c1c;
`;

////・⬇︎文字のみ「トップへ戻る」
const PageTop = styled.div`
  margin-left: auto;
  width: fit-content;
  position: relative;
  color: #fff;
  cursor: pointer;
  transition: transform 0.3s ease;
  /* padding: 10px 15px; */
  /* background-color: #000; */
  &:hover {
    transform: translateY(-2px);
  }
  /*⬇︎::beforeで要素が持っている“装飾専用のレイヤー”を常に定義 */
  &::before {
    content: '';
    position: absolute;
    /* background: linear-gradient(135deg, #6fa24a, #15a1cc); */
    /* border-radius: 6px; */
    transition: opacity 0.3s ease;
    opacity: 0;
    inset: 0;
    z-index: -1;
  }
  /*⬇︎hoverされたら「beforeを見せる」 */
  &:hover::before {
    opacity: 1;
  }
  /*⬇︎focus-visible「キーボード操作時に"Tabキーでフォーカスされたとき"だけ反応」 */
  &:focus-visible {
    outline: 2px solid #6fa24a; //緑のアウトライン線が出現
    outline-offset: 4px;
  }
`;

// ////・⬇︎枠線グラデーション発光の「トップへ戻るボタン」
// const PageTop = styled.button`
//   margin-left: auto;
//   display: block;
//   position: relative;
//   padding: 2px;
//   border-radius: 6px;
//   background: linear-gradient(135deg, #6fa24a, #15a1cc);
//   cursor: pointer;
//   border: none;
//   &::before {
//     /* ⬆︎・要素が持っている“装飾専用のレイヤー”を、常に定義する */
//     content: '';
//     position: absolute;
//     border-radius: inherit;
//     background: linear-gradient(135deg, #6fa24a, #15a1cc);
//     inset: 0;
//     opacity: 0;
//     filter: blur(8px);
//     transition: opacity 0.2s;
//   }
//   &:hover::before {
//     /* ⬆︎hoverされたら「beforeを見せる」 */
//     opacity: 1;
//   }
//   &:hover {
//     transform: translateY(-2px);
//   }
// `;
// const PageTopInner = styled.span`
//   background-color: #000000;
//   color: #fff;
//   position: relative;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px 16px;
//   border-radius: 4px;
// `;

const ReturnTop = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    ////・⬇︎文字のみ「トップへ戻る」
    <PageTopWrap className='pb-[70px] '>
      <Wrapper>
        <Inner>
          <PageTop onClick={returnTop} aria-label='ページの最上部へ戻る' data-stalker>
            Back To Top
            <FontAwesomeIcon icon={['fas', 'arrow-turn-up']} />
          </PageTop>
        </Inner>
      </Wrapper>
    </PageTopWrap>

    ////・⬇︎枠線グラデーション発光の「トップへ戻るボタン」
    // <div className='pb-[70px]'>
    //   <PageTop onClick={returnTop}>
    //     <PageTopInner>
    //       Back To Top
    //       <FontAwesomeIcon icon={['fas', 'arrow-turn-up']} />
    //     </PageTopInner>
    //   </PageTop>
    // </div>
  );
};

export default ReturnTop;
