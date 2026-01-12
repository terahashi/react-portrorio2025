// animations/side.js
// chatGPTの助言もあり作成ができた！
//useRefが渡ってくる。extraOffsetは余白。

const areaFixedFunk = (areaRef, targetRef, headerRef, extraOffset = 100) => {
  if (!areaRef.current || !targetRef.current) return; // targetRefとareaRefがなければ実行せず終了

  let ticking = false; //フラグの役割 = スクロール中に何度も処理されるのを抑制して、パフォーマンス改善。

  //⬇︎Headerの高さを取得する関数を作成する。「Layout.jsx」にuseRefがあります。
  //下記の ?. が付いている意味は「オプショナルチェイニング演算子」です。
  //・headerRefが undefined でもOK
  //・current === null でもOK　なのでエラーが出ない。
  const getHeaderHeight = () => headerRef?.current?.offsetHeight || 0;

  ////⭐️⬇︎追従ロジック
  const checkFixed = () => {
    const area = areaRef.current;
    const target = targetRef.current;

    const headerHeight = getHeaderHeight(); //ヘッダー高さの最新値が取れる

    const scrollY = window.scrollY; //現在のスクロール量
    const areaTop = area.offsetTop; //areaの上端
    const areaHeight = area.offsetHeight; //areaの高さ
    const targetHeight = target.offsetHeight; //固定する要素(追従する要素)の高さ
    const areaLeft = area.getBoundingClientRect().left; //areaの「leftの位置」を取得する。getBoundingClientRect()は「画面（ビューポート）に対して、その要素の「左からの距離」を取得するプロパティ。」

    //①エリア前(まだエリアに入ってない = 固定しない(追従を開始しない))
    if (scrollY + headerHeight + extraOffset < areaTop) {
      // target.classList.remove('is-fixed'); //fixedクラスを外す
      target.style.position = 'absolute';
      target.style.top = '0px'; //初期位置
      target.style.left = ''; //left位置もリセット
    }

    //②エリアより下に超えたら(エリアの下端に到達する = 固定解除してエリアの底にぴったり止める)
    else if (scrollY + headerHeight + extraOffset + targetHeight > areaTop + areaHeight) {
      // target.classList.remove('is-fixed'); //fixedクラスを外す
      target.style.position = 'absolute';
      target.style.top = areaHeight - targetHeight + 'px'; //エリアの底にぴったり止める
      target.style.left = ''; //left位置もリセット
    }

    //③エリアの中をスクロールしてる時に = 固定する(追従を開始する)
    else {
      // target.classList.add('is-fixed'); //fixedクラスを付与
      target.style.position = 'fixed';
      target.style.top = headerHeight + extraOffset + 'px';
      target.style.left = areaLeft + 'px'; //「areaのleftの位置」に追従させる
    }
  };

  ////⬇︎「handleScrollOrResize関数」
  //・リサイズ処理(開発者ツールで 初回マウント時のスマホ版 にした時に要素が追従しないようにする処理") と スクロール処理を「まとめて処理するロジック」
  //これを使わないと「開発者ツールで 初回マウント時のスマホ版 にした時に"要素が追従してしまう不具合"」が発生する
  const handleScrollOrResize = () => {
    const width = window.innerWidth;
    const target = targetRef.current;

    if (!target) return; //targetが「turthyでなければ」実行せず終了

    //⭐️リサイズ処理
    //タブレットの縦向き以下(ブラウザ幅1023px以下))の場合
    if (width <= 1023) {
      // スマホでは「static」で追従解除
      target.style.position = 'static'; //target.style.position = 'static';で 開発者ツールで初回マウント時スマホ版 では追従を解除する
      target.style.top = '0';
      target.style.left = '';
      return;
    }

    //スクロール処理
    //tickingが「false」なのでif文の中に入る
    if (!ticking) {
      //①rAFを予約
      //③rAFのコールバック内でchecFixed()を実行して「追従ロジック」を実行する
      requestAnimationFrame(() => {
        checkFixed();
        ticking = false;
      });
      ticking = true; //②即実行して次のスクロールイベントまで処理抑制のためにtrueにする
    }
  };
  //初期位置チェック
  handleScrollOrResize();

  //イベント登録(scrollイベントとresizeイベントで 同じ処理を実行)
  //{passive: ture}で標準の動作(preventDefault())を防ぐ。スクロールを止めないようにする。
  window.addEventListener('scroll', handleScrollOrResize, { passive: true });
  window.addEventListener('resize', handleScrollOrResize, { passive: true });

  //cleanUP用に関数を「SideFixed.jsxに渡す」
  return () => {
    window.removeEventListener('scroll', handleScrollOrResize);
    window.removeEventListener('resize', handleScrollOrResize);
  };
};

export default areaFixedFunk;
