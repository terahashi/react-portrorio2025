//「/data/worksData.js」からデータの配列オブジェクトを作成する
//⭕️メリット➡︎「作品は配列データとして管理しmapでループしてコンポーネントとして描画。作品数が増えてもJSXを変更せず、データ追加だけで対応できる」

const worksData = [
  {
    id: 1,
    title: 'Takahashi Portfolio',
    image: '/images/nature.jpg',
    videos: '/videos/work1sample.mp4',
    desctription: `
      ■ 概要
      Reactを用いて作成したポートフォリオサイトです。
      習得したコンポーネント設計や状態管理を実践するために、設計、開発、実装までを行いました。

      ■ 使用技術
	    •	React(SPA / CSR)
	    •	JavaScript
	    •	CSS（TailwindCSS / Styled-components）
	    •	Netlify(デプロイ)
      `,
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://takahashiportfolio.netlify.app/',
    // link: '/works/1', //⬅︎WorksItem.jsxで <Link to={work.link}>で使う場合
  },
  {
    id: 2,
    title: 'サンプルサイト2',
    image: '/images/nature.jpg',
    videos: '/videos/work1sample.mp4',
    desctription: 'サンプルサイト2のdescription',
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://takahashiportfolio.netlify.app/',
  },
  {
    id: 3,
    title: 'サンプルサイト3',
    image: '/images/nature.jpg',
    videos: '/videos/work1sample.mp4',
    desctription: 'サンプルサイト3のdescription',
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://takahashiportfolio.netlify.app/',
  },
  {
    id: 4,
    title: 'サンプルサイト4',
    image: '/images/nature.jpg',
    videos: '/videos/work1sample.mp4',
    desctription: 'サンプルサイト4のdescription',
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://takahashiportfolio.netlify.app/',
  },
];

export default worksData;
