import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//ページ遷移すると「スクロール位置が"ページ最上部に移動する"」
//Reactは「ページ遷移でマウントせず画面の一部だけを書き換える」ので【スクロール位置を制御するScrollTop.jsxが必要。】
const ScrollTop = () => {
  //useLocation()は「現在のURL情報」を取得するフック。
  const { pathname } = useLocation(); //URL（pathname）が変わった瞬間を検知。pathnameは"/works/1"のこと。

  //useEffectを使用して「画面描画後に実行する」
  useEffect(() => {
    window.scrollTo(0, 0); // ページ遷移時に「最上部へスクロールする。」
  }, [pathname]); // URL[pathname]が変わったときだけ、この処理を実行する。

  return null; //「このコンポーネントは「表示目的」ではない」ので【DOMに何も描画しない = null】
};

export default ScrollTop;
