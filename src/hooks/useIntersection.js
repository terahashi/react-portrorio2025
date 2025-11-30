//「カスタムフック化した【hooks/useIntersection.jsファイル】」
import { useEffect, useState, useRef } from 'react';

const useIntersection = (options) => {
  const targetRef = useRef(null); //監視対象のrefを作成
  const [isIntersecting, setIsIntersecting] = useState(true); //交差状態を管理するstate（最初は「見えている(true)」と仮定する）

  useEffect(() => {
    if (!targetRef.current) return; //ref.currentが存在しない場合実行しない

    //⬇︎IntersectionObserverのインスタンスを作成
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting); // (entry.isIntersecting)で、trueなら要素が画面内に“見えている”。falseなら要素が画面外で“見えていない”
    }, options); // optionsはカスタムフックの引数で受け取った「threshold: 0.09」などの設定値

    observer.observe(targetRef.current); //このDOM(targetRef)を監視して、とObserverに指示しる。

    return () => observer.disconnect(); //クリーンアップ：コンポーネントがアンマウントされたときにobserverを停止
  }, [options]); // optionsが変わったときに再度実行される

  return { targetRef, isIntersecting }; //Home.jsxで使用するためにreturnで返す
};

export default useIntersection;
