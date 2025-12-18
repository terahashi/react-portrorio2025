import styled from 'styled-components';
import worksData from '../data/worksData'; //worksData(データ(タイトルやimage)を取得

import WorksItem from './WorksItem';

////・Worksのデータの一覧表示の流れ
//①worksData(データ(タイトルやimage)を取得
//   ↓
//②Works(このファイルへ取得)
//   ↓ propsで渡す
//③WorksItem

//⬇︎styled-components
const WorksWrap = styled.div`
  background: #000000;
  .w__list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 12px;
    .w__item {
      width: calc(33.333% - 10px);
      img {
        width: 100%;
        aspect-ratio: 16 / 9; //縦横比をCSS側で指定。高さを直接書かなくていい。レスポンシブで安定する。
        object-fit: cover;
        display: block;
      }
    }
  }
`;

//⬇︎Worksコンポーネント
//mapメソッドを使って「worksData配列オブジェクトからデータ(タイトルやimage)を取得」して表示する
const Works = () => {
  return (
    <WorksWrap>
      <div className='w__list'>
        {worksData.map((work) => (
          <WorksItem key={work.id} work={work} />
        ))}
      </div>
    </WorksWrap>
  );
};

export default Works;
