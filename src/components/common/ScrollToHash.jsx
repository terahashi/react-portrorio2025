//// ScrollToHashコンポーネントについて。
//「URLの#ハッシュタグ要素を監視。そのidを持つ要素まで【最後に】スクロールする専用コンポーネント。」
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash } = useLocation(); //現在のURL情報を取得するのがuseLocationです。{ hash }は例えば "#skills" などが代入される。

  useEffect(() => {
    if (!hash) return; //「#hash」が何も無いならuseEffectは実行しない。

    const target = document.querySelector(hash); //(hash)に該当する要素をquerySelectorで取得。
    if (!target) return; //「!target」で該当要素が無かったらuseEffectを実行しない。

    ////‼️⬇︎重要ポイント
    //「SideFixedの初期 checkFixed()」より後に確実に実行させることができる。
    // setTimeoutで50ms遅延させて発動させる ➡︎ その結果「SideFixedの初期 checkFixed()が完了した後」に実行される
    //①:DOMが完全に描画される
    //②:SideFixedの初期計算が終わる
    //③:スクロール位置が落ち着く
    //④:最後に「hashスクロールが実行する」
    const timer = setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth' }); //「scrollIntoView()メソッド」でtarget要素(#skillsの"先頭"がビューポートに来るまで)までスクロール。「behaiviorオプション'smooth'でスムーズなアニメーションで特定の位置までスクロールします。」
    }, 50);

    // ⬇︎timerをクリーンアップ
    return () => clearTimeout(timer);
  }, [hash]); //[hash]が変わるたびにuseEffectが実行される

  return null; //return null;で「副作用目的だけのコンポーネント」
};

export default ScrollToHash;
