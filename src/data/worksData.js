//「/data/worksData.js」からデータの配列オブジェクトを作成する
//⭕️メリット➡︎「作品は配列データとして管理しmapでループしてコンポーネントとして描画。作品数が増えてもJSXを変更せず、データ追加だけで対応できる」

const worksData = [
  {
    id: 1,
    title: 'サンプルサイト1',
    image: '/images/nature.jpg',
    videos: '/videos/work1sample.mp4', //mp4動画
    //poster: '/images/works1.jpg',
    desctription: 'サンプルサイト1のdescriptionとして定義',
    desctription2: '‼️サンプルサイト1のdescription2として定義',
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    // link: '/works/1', ////⬅︎WorksItem.jsxで<Link to={work.link}>で使う場合
  },
  {
    id: 2,
    title: 'サンプルサイト2',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    videos: '/videos/work1sample.mp4',
    //poster: '/images/works1.jpg',
    desctription: 'サンプルサイト2 descriptionとして定義',
    desctription2: 'サンプルサイト2 description2として定義',
  },
  {
    id: 3,
    title: 'サンプルサイト3',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    videos: '/videos/work1sample.mp4',
    //poster: '/images/works1.jpg',
    desctription: 'サンプルサイト3 descriptionとして定義',
    desctription2: 'サンプルサイト3 description2として定義',
  },
  {
    id: 4,
    title: 'サンプルサイト4',
    description: 'Reactで作成したポートフォリオサイトです',
    image: '/images/nature.jpg',
    videos: '/videos/work1sample.mp4',
    //poster: '/images/works1.jpg',
    desctription: 'サンプルサイト4 descriptionとして定義',
    desctription2: 'サンプルサイト4 description2として定義',
  },
];

export default worksData;
