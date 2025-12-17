import styled from 'styled-components';
import WorksItem from './WorksItem';

//データの配列オブジェクトを作成する
//⭕️メリット➡︎「作品は配列データとして管理しmapでループしてコンポーネントとして描画。作品数が増えてもJSXを変更せず、データ追加だけで対応できる」
const worksData = [
  {
    id: 1,
    title: 'サンプルサイト',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    link: 'https://example.com',
  },
  {
    id: 2,
    title: 'サンプルサイト2',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    link: 'https://example.com',
  },
  {
    id: 3,
    title: 'サンプルサイト3',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    link: 'https://example.com',
  },
  {
    id: 4,
    title: 'サンプルサイト4',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    link: 'https://example.com',
  },
];

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
//mapメソッドを使って「worksData配列オブジェクトからデータ(imageやタイトル)を取得」して表示する
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
