//「/data/worksData.js」からデータの配列オブジェクトを作成する
//⭕️メリット➡︎「作品は配列データとして管理しmapでループしてコンポーネントとして描画。作品数が増えてもJSXを変更せず、データ追加だけで対応できる」

const worksData = [
  {
    id: 1,
    title: 'Takahashi Portfolio',
    image: '/images/site_thumbnail/site-thumbnail-01.jpg',
    sitethumbnail: '/images/site_thumbnail/site-thumbnail-01.jpg',
    hoverthumbnail: '/images/site_thumbnail/hover_thumbnail01.jpg',
    videos: '/videos/work1sample.mp4',
    desctription: `
      ■ 概要
      Reactを用いて作成したポートフォリオサイトです。
      習得したコンポーネント設計や状態管理を実践するために、設計、実装までを行いました。

      ■ 使用技術
	    ・React(SPA / CSR)
	    ・JavaScript
	    ・CSS(TailwindCSS / Styled-components)
      ・Git / GitHub
	    ・Netlify(デプロイ)

      ■ 作成期間
      約1.5ヶ月

      ■ 工夫した点
      ・コンポーネント設計を意識し、再利用性と保守性の高い構成を実現。
      ・TailwindCSSとStyled-componentsを併用し、効率的なスタイリングとレスポンシブ対応を実装。
      ・React Hooksを活用し、状態管理や副作用処理を適切に実装。
      ・Three.jsを用いた3D表現やUI改善に取り組み、UX向上を意識。

      ■ 苦労した点
    	・UI/UXを意識したデザインと実装のバランス調整に苦戦。
	    ・Three.jsの導入時に、描画処理やパフォーマンス調整に時間を要しました。

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
    title: 'Next Gallery Site',
    image: '/images/site_thumbnail/site-thumbnail-02.jpg',
    sitethumbnail: '/images/site_thumbnail/site-thumbnail-02.jpg',
    hoverthumbnail: '/images/site_thumbnail/hover_thumbnail02.jpg',
    videos: '/videos/work1sample.mp4',
    desctription: `
    ■ 概要
    Next.js(App Router)を用いて作成した画像ギャラリーサイトです。 SSR / SSGを活用した設計から実装、テスト(Jest)まで一貫して行いました。

    ■ 使用技術
    ・Next.js(App Router / SSR / SSG)
    ・JavaScript
    ・CSS(TailwindCSS / Styled-components)
    ・Jest(テスト)
    ・Git / GitHub
    ・Vercel(デプロイ)

    ■ 作成期間
    約1.5ヶ月

    ■ 工夫した点
    ・App Routerを用いたルーティング設計を行い、SSR / SSGを適切に使い分けた開発を意識。
    ・フィルタリングとグルーピング処理を実装し、タグ選択に応じて関連画像を動的に表示。
    ・トップページではランダムな画像表示を実現するため、'force-dynamic'を使用しSSR化。
    ・コンポーネント設計を意識し、再利用性・保守性の高い構成を実現。
    ・Next.js × Vercelによる最適なデプロイ環境を構築。

    ■ 苦労した点
    ・フィルタリングとグルーピング処理のロジック設計に苦戦(配列変換やevery()を用いた条件判定)
    ・SSR / SSGの概念理解と使い分け、SPAとの違いに慣れるまでに苦戦しました。
    ・Jestによるテスト実装が初めてで、テスト設計や書き方の理解が大変でした。

    ■ 今後の改善点
    ・画像数増加に対応するため、ページネーションやUI改善によるUX向上。

    `,
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://next-gallery-azure.vercel.app/',
  },
  {
    id: 3,
    title: 'DevLog',
    image: '/images/site_thumbnail/site-thumbnail-03.jpg',
    sitethumbnail: '/images/site_thumbnail/site-thumbnail-03.jpg',
    hoverthumbnail: '/images/site_thumbnail/hover_thumbnail03.jpg',
    videos: '/videos/work1sample.mp4',
    desctription: `
      ■ 概要
      microCMS(Headless CMS)を使用し、Next.js × TypeScriptで構築したブログサイトです。 APIから記事データを取得し、ISR / SSGを用いたデータ取得・表示の設計から実装まで一貫して行いました。

      ■ 使用技術
      ・microCMS(Headless CMS)
      ・Next.js(ISR / SSG)
      ・TypeScript
      ・CSS(TailwindCSS / Styled-components)
      ・Jest(テスト)
      ・Git / GitHub
      ・SEO設定(Next.js)
      ・Vercel(デプロイ)

      ■ 作成期間 約1ヶ月

      ■ 工夫した点
      ・microCMSのAPIを活用し、記事一覧。
      ・詳細ページのデータ取得処理を設計。
      ・ISR / SSGを用いてパフォーマンスと更新性を両立した構成を実装。
      ・TypeScriptを導入し、型定義やジェネリクスを活用して型安全な開発を実現。
      ・コンポーネント設計を意識し、再利用性・保守性の高い構成を構築。

      ■ 苦労した点
      ・microCMSのAPIから記事データを取得する処理設計(特定記事取得やデータ構造の理解)
      ・TypeScriptの型定義(型エイリアスやジェネリクス)に慣れるまでが大変でした。
      ・JestによるAPIモック作成に苦戦しました。

      ■ 今後の改善点
      ・検索機能の追加によるUX向上。
      ・パフォーマンスのさらなる最適化。

    `,
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://next-microcms-blog-fawn.vercel.app/',
  },
  {
    id: 4,
    title: 'トラベルセーフティプラン',
    image: '/images/site_thumbnail/site-thumbnail-04.jpg',
    sitethumbnail: '/images/site_thumbnail/site-thumbnail-04.jpg',
    hoverthumbnail: '/images/site_thumbnail/hover_thumbnail04.jpg',
    videos: '/videos/work1sample.mp4',
    desctription: 'サンプルサイト4のdescription',
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://wwc.or.jp/travelsafetyplan/',
  },
];

export default worksData;
