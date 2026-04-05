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

      ■ 作成期間
      約1ヶ月

      ■ 工夫した点
      ・microCMSのAPIを活用し、記事一覧と詳細ページのデータ取得処理を設計。
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
    // videos: '/videos/work1sample.mp4',
    desctription: `
    ■ 概要
    ・仕事で旅行保険のWebサイトを制作しました。 デザインからフロントエンド実装まで一貫して担当しています。
    JavaScriptを用いて、カレンダーから旅行日を選択し、旅行日数および料金を自動計算する機能を実装しました。

    ■ 使用技術
    ・HTML
    ・SCSS
    ・JavaScript
    ・PHP(メールフォーム)

    ■ 作成期間
    約1.5ヶ月

    ■ 工夫した点
    ・カレンダーUIから旅行日を選択し、日数と料金を自動計算する仕組みをJavaScriptで実装しました。
    ・保険サービスとしての信頼感と、旅行の楽しさを両立させるため、ブルーとイエローを基調とした配色設計を行いました。
    ・入力フォームはユーザーが迷わないよう、シンプルな導線設計を意識しました。

    ■ 苦労した点
    ・旅行日選択と料金計算ロジックの実装に苦労しました。
    ・当時はJavaScriptの理解が浅く、金額の合計値や日付計算の扱いに試行錯誤しながら実装しました。

    ■ 改善点と反省点
    ・TypeScriptを導入し、型安全性を確保することでバグの早期発見とチーム開発での理解しやすさを向上させたいです。
    ・料金表を見やすくするなど(タブ切り替えのような)UXを高めたいです。
    `,
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://wwc.or.jp/travelsafetyplan/',
  },
  {
    id: 5,
    title: '株式会社モビリティワークス',
    image: '/images/site_thumbnail/site-thumbnail-05.jpg',
    sitethumbnail: '/images/site_thumbnail/site-thumbnail-05.jpg',
    hoverthumbnail: '/images/site_thumbnail/hover_thumbnail05.jpg',
    // videos: '/videos/work1sample.mp4',
    desctription: `
    ■ 概要
    ・お仕事で制作したコーポレートサイトです。
    フロントエンド実装を全て担当し、WordPressのオリジナルテーマ構築にも携わりました。

    ■ 使用技術
    ・HTML
    ・SCSS
    ・WordPress
    ・JavaScript

    ■ 作成期間
     約1.5ヶ月

    ■ 工夫した点
    ・WordPressにてオリジナルテーマを構築し、投稿機能を実装（管理画面から更新可能な構成）
    ・トップページ下部では、スライダーとコンテンツ要素がhoverで連動するUIを実装し、視覚的なわかりやすさと操作性の向上を意識しました。

    ■ 苦労した点
    ・スライダーとコンテンツ要素の連動処理において、イベント制御の設計に苦労しました。
    ・初期表示速度の改善にも取り組みましたが、当時の知識では十分な最適化ができず課題として残りました。

    ■ 改善点と反省点
    ・本サイトの表示速度については、画像サイズやJavaScriptの読み込みに加え、WordPress構成やサーバー応答の影響が大きいと考えています。
    ・現在のスキルを踏まえると、以下のような改善が可能と考えています 。
      1: 画像の最適化（WebP化・遅延読み込み）
      2: 不要なJavaScriptの削減および読み込み制御。
      3: WordPressプラグインの整理とキャッシュ戦略の見直し。

    `,
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://www.mobilityworks.co.jp/',
  },

  {
    id: 6,
    title: '旧ポートフォリオサイト',
    image: '/images/site_thumbnail/site-thumbnail-06.jpg',
    sitethumbnail: '/images/site_thumbnail/site-thumbnail-06.jpg',
    hoverthumbnail: '/images/site_thumbnail/hover_thumbnail06.jpg',
    // videos: '/videos/work1sample.mp4',
    desctription: `
    ■ 概要
    ・2021年に作成した旧ポートフォリオサイトです。当時はHTML / CSS / WordPressを中心に学習しており、主にデザインの再現性を重視して制作しました。
    ・デザインは完全オリジナルで作成しています。

    ■ 使用技術
    ・HTML
    ・CSS
    ・Wordpress
    ・Jquery
    ・FileZilla(FTP)

    ■ 作成期間
     約2ヶ月

    ■ 現在との違い
    ・現在はReactやコンポーネント設計を学習したことで、UIを部品単位で設計し、再利用性や保守性を意識した実装が可能になりました。
    ・また、パフォーマンス最適化やアクセシビリティといった観点も踏まえて設計できるようになっています。

    ■ 改善点(今ならこうする)
    ・Next.jsを用いてコンポーネント単位で再設計し、保守性・拡張性を向上。
    ・スタイルやスクリプトを整理し、可読性の高い構成に改善する。
    ・不要なCSSの削除や読み込み順の最適化により、パフォーマンスを改善。
    ・アクセシビリティ(aria属性『視覚の補足』・セマンティックHTML『HTMLのタグを正しく使い分ける』)を考慮した実装にすることです。

    `,
    sideText: 'sideText sideTex tsideText sideText sideText sideText sideText', //<SideFixed>コンポーネント渡す
    visitsite: 'VISIT WEBSITE',
    url: 'https://taksplant.main.jp/portfolio-wp/',
  },
];

export default worksData;
