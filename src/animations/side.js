// animations/side.js
// chatGPTの助言もあり作成ができた！
//⬇︎useRefが渡ってくる。extraOffsetは余白。

const areaFixedFunk = (areaRef, targetRef, headerRef, extraOffset = 100) => {
  if (!areaRef.current || !targetRef.current) return; // targetRefとareaRefがなければ実行せず終了

  //⬇︎レスポンシブでは「areaFixedFunk関数を使わないで追従ロジック自体を無効化」する
  if (window.innerWidth <= 768) {
    return () => {};
  }

  let ticking = false; //フラグの役割 = スクロール中に何度も処理されるのを抑制して、パフォーマンス改善。

  ////⬇︎Headerの高さを取得する関数を作成する。「Layout.jsx」にuseRef本体があります。
  //下記の?が付いている意味は
  //・headerRefがundefined でもOK
  //・current === null でもOK
  //なのでエラーを出さない
  const getHeaderHeight = () => headerRef?.current?.offsetHeight || 0;

  //⬇︎追従ロジック
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

  ////////////⬇︎スクロール時の処理
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        checkFixed(); //追従ロジックcheckFixedを実行
        ticking = false; //処理が終わったらtickingフラグをfalseに戻す
      });
      ticking = true; //tickingフラグをtrueにセットして、次のスクロールイベントまで処理を抑制
    }
  };

  //⬇︎初期位置
  checkFixed();

  window.addEventListener('scroll', onScroll, { passive: true }); //{passive: ture}で標準の動作(preventDefault())を防ぐ。スクロールを止めないようにする。
  window.addEventListener('resize', checkFixed);

  //⬇︎✅cleanUP用に関数を渡す
  return () => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', checkFixed);
  };
};

export default areaFixedFunk;
