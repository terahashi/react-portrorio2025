import { useEffect, useState } from 'react';

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export default function RandomText({ text, speed = 300 }) {
  const [displayed, setDisplayed] = useState('');

  //⬇︎useEffectを使用。アニメーション処理を実装する
  useEffect(() => {
    let iteration = 0; //どの文字まで確定したかを数えるカウンター
    let frame; //アニメーションフレーム(requestAnimationFrame、cancelAnimationFrame)のIDを保存する変数

    //⬇︎アニメーション用の内部関数animateを定義(イベントハンドラーではありません)
    const animate = () => {
      setDisplayed(
        (prev) =>
          text
            .split('')
            .map((char, i) => {
              if (i < iteration) {
                return char; //charはすでに確定した文字「My Name is〜」
              }
              return letters[Math.floor(Math.random() * letters.length)]; //ランダムな文字
            })
            .join('') //配列を文字列に戻す
      );

      iteration += 1 / 9; //進行速度（大きいと早く確定する）
      iteration += 1 / speed; // speedの値で調整可能

      if (iteration <= text.length) {
        //⬆︎iterationが文字数(text.length)より「小さいまたは等しい間」だけアニメーションを続ける
        frame = requestAnimationFrame(animate); //ブラウザの次の描画タイミングで(animate)を呼ぶ。毎フレーム呼び出すことで滑らかなアニメーションを作れる
      }
    };

    frame = requestAnimationFrame(animate); //最初のアニメーションフレームをリクエスト
    return () => cancelAnimationFrame(frame); //クリーンナップ処理。requestAnimationFrameで予約したアニメーションをキャンセルする。不要になったループを止める
  }, [text]);

  return <h1 style={{ position: 'fixed', top: '51vw', left: '6vw', fontSize: '2.5rem' }}>{displayed}</h1>;
}
