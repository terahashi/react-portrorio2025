import { useState } from 'react';
import styled from 'styled-components';
import worksData from '../data/worksData'; //worksData(データ(タイトルやimage)を取得

import WorksItem from './WorksItem';
import WorksHover from './WorksHover';

////・Worksのデータの一覧表示の流れ
//①worksData(データ(タイトルやimage)を取得
//   ↓
//②Works(このファイルへ取得)
//   ↓ propsで渡す
//③WorksItem

const WorksWrap = styled.div`
  background: #000000;
  .w__list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 12px;
    .w__item {
      width: calc(33.333% - 10px);
      img {
        width: 100%;
        aspect-ratio: 16 / 9; //縦横比をCSS側で指定。高さを直接書かなくていい。レスポンシブで安定する。
        object-fit: cover;
        display: block;
      }
    }
  }
`;

////Worksコンポーネント
//mapメソッドを使って「worksData配列オブジェクトからデータ(タイトルやimage)を取得」して表示
const Works = () => {
  const [hoverWork, setHoverWork] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY }); //「今マウスが画面のどこにあるか」をstateに保存
    //(e)にマウスの座標やボタンの状態などを持った MouseEventオブジェクト(onMouseMove) が入る
    //「e.clientX」はブラウザのビューポート左端からマウスまでの水平距離(px)
    //「e.clientY」はブラウザのビューポート上端からマウスまでの垂直距離(px)
  };

  return (
    <WorksWrap onMouseMove={handleMouseMove}>
      {/* ⬆︎<WorksWrap>上でマウスが動いたら handleMouseMove が呼ばれる */}

      <div className='w__list'>
        {worksData.map((work) => (
          <WorksItem key={work.id} work={work} onHover={setHoverWork} />
        ))}
      </div>

      <WorksHover work={hoverWork} mousePos={mousePos} />
    </WorksWrap>
  );
};

export default Works;
