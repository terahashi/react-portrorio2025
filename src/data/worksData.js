//「/data/worksData.js」からデータの配列オブジェクトを作成する
//⭕️メリット➡︎「作品は配列データとして管理しmapでループしてコンポーネントとして描画。作品数が増えてもJSXを変更せず、データ追加だけで対応できる」

const worksData = [
  {
    id: 1,
    title: 'Takahashi Portfolio',
    image: '/images/nature.webp',
    videos: '/videos/work1sample.mp4',
    desctription: `
      ■ 概要
      Reactを用いて作成したポートフォリオサイトです。
      習得したコンポーネント設計や状態管理を実践するために、設計、実装までを行いました。

      ■ 使用技術
	    ・React(SPA / CSR)
	    ・JavaScript
	    ・CSS（TailwindCSS / Styled-components）
      ・Git / GitHub
	    ・Netlify(デプロイ)

      ■ 作成期間
      約1.5ヶ月

      ■ 工夫した点
      ・コンポーネント設計を意識し、再利用性・保守性の高い構成を実現
      ・TailwindCSSとStyled-componentsを併用し、効率的なスタイリングとレスポンシブ対応を実装
      ・React Hooksを活用し、状態管理や副作用処理を適切に実装
      ・Three.jsを用いた3D表現やUI改善に取り組み、UX向上を意識

      ■ 苦労した点
    	・UI/UXを意識したデザインと実装のバランス調整に苦戦
	    ・Three.jsの導入時に、描画処理やパフォーマンス調整に時間がかかった

      ■ 今後の改善点
      ・パフォーマンスのさらなる最適化(表示速度の改善や不要なレンダリングの削減など)
      ・アクセシビリティの改善(キーボード操作を追加するなど)
      `,

    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://takahashiportfolio.netlify.app/',
    // link: '/works/1', //⬅︎WorksItem.jsxで <Link to={work.link}>で使う場合
  },
  {
    id: 2,
    title: 'サンプルサイト2',
    image: '/images/nature.webp',
    videos: '/videos/work1sample.mp4',
    desctription: 'サンプルサイト2のdescription',
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://takahashiportfolio.netlify.app/',
  },
  {
    id: 3,
    title: 'サンプルサイト3',
    image: '/images/nature.webp',
    videos: '/videos/work1sample.mp4',
    desctription: 'サンプルサイト3のdescription',
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://takahashiportfolio.netlify.app/',
  },
  {
    id: 4,
    title: 'サンプルサイト4',
    image: '/images/nature.webp',
    videos: '/videos/work1sample.mp4',
    desctription: 'サンプルサイト4のdescription',
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://takahashiportfolio.netlify.app/',
  },
];

export default worksData;
