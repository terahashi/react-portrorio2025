////「画面サイズ（メディアクエリ）に一致しているかを、Reactのstateとして監視するフック」
// ハンバーガーメニューを"PCでは表示しない"ようにするための「true/falseを返すだけのシンプル設計」
// 主にHeader.jsxで使用する。
// SSR（Next.js）だとこの書き方は危険なのでNextでは書かない！

import { useEffect, useState } from 'react';

////「useMediaQuery関数」でCSSの@mediaをJS化する
const useMediaQuery = (query) => {
  //⬆︎渡ってくるqueryは'(max-width: 767px)'などの文字列

  const [isMatched, setIsMatched] = useState(window.matchMedia(query).matches);
  //⬆window.matchMedia(query)は「メディアクエリをJSで評価する"ブラウザAPI"」
  //⬆︎「.matches」は【true/falseなどの条件を満たしているか？】などの評価。.matches = true:条件に合っている //.matches = false:条件に合っていない
  //⭕️.matchesはブラウザ内で評価結果を内包している。ブラウザは既に「.matchesを持っている」ということ。

  //⬇︎useEffectで「画面サイズの変化を監視する」
  useEffect(() => {
    const media = window.matchMedia(query); //「ブラウザ」でメディアクエリの評価をする。メディアクエリの監視対象のこと(queryは'(max-width: 767px)'など)

    const listener = () => setIsMatched(media.matches); //1:まずmedia.addEventListener('change', listener)で「画面サイズが変わったか？」と判断している。2:その後「media.matchesを再評価してsetMatchesでstate更新」

    media.addEventListener('change', listener); //「ブラウザ」でメディアクエリの評価結果（media.matches）後に、true/falseに切り替わった瞬間に'changeが発火して'listener関数が呼ばれる

    //⬇︎クリーンナップ処理(メモリリーク & バグを阻止する。)
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return isMatched; //今のメディアクエリ判定結果「useStateのisMatched」を使用側に返却する
};

export default useMediaQuery;
