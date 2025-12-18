//「/data/worksData.js」からデータの配列オブジェクトを作成する
//⭕️メリット➡︎「作品は配列データとして管理しmapでループしてコンポーネントとして描画。作品数が増えてもJSXを変更せず、データ追加だけで対応できる」
const worksData = [
  {
    id: 1,
    title: 'サンプルサイト1',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    desctription: 'サンプルサイト1 descriptionとして定義',
    desctription2: 'サンプルサイト1 description2として定義',
    // link: '/works/1', ////⬅︎WorksItem.jsxで<Link to={work.link}>で使う場合
  },
  {
    id: 2,
    title: 'サンプルサイト2',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    desctription: 'サンプルサイト2 descriptionとして定義',
    desctription2: 'サンプルサイト2 description2として定義',
    // link: 'https://example.com',
  },
  {
    id: 3,
    title: 'サンプルサイト3',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    desctription: 'サンプルサイト3 descriptionとして定義',
    desctription2: 'サンプルサイト3 description2として定義',
    // link: 'https://example.com',
  },
  {
    id: 4,
    title: 'サンプルサイト4',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    desctription: 'サンプルサイト4 descriptionとして定義',
    desctription2: 'サンプルサイト4 description2として定義',
    // link: 'https://example.com',
  },
];

export default worksData;
