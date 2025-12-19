//WorksDetails は「propsを受け取らない」=>このファイルは「URL（id）＋ data から取得」
////・WorksDetail.jsx詳細ページの流れ
//①URL (/works/:id)
//   ↓
//②WorksDetail
//   ↓
//③worksData.find(id)

import { useContext, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ColorContext from '../../contexts/ColorContext'; //useContext(ColorContext)

import worksData from '../../data/worksData';
import SideFixed from '../../components/SideFixed';

const WorksDetail = () => {
  //useContext(ColorContext)・Headerの文字色を白にする
  const { setIsDark } = useContext(ColorContext);

  //idでページURL取得
  const { id } = useParams();
  const workdetail = worksData.find((item) => item.id === Number(id));

  //🔥404ページ
  if (!workdetail) {
    return <Navigate to='/404' replace />;
  }

  //⬇︎ページに入った瞬間に「・Headerの文字色を白にする」
  useEffect(() => {
    setIsDark(true);
    //クリーンナップ
    return () => {
      setIsDark(false);
    };
  }, [setIsDark]);

  return (
    <section>
      <SideFixed title={workdetail.title} description={workdetail.desctription}>
        <div style={{ height: '3000px' }}>
          <h1>{workdetail.title}</h1>
          <img src={workdetail.image} alt={workdetail.titke} />
          <p>{workdetail.desctription}</p>
          <p>{workdetail.desctription2}</p>
        </div>
      </SideFixed>

      <Link to='/' className='back-home'>
        ← トップに戻る
      </Link>
    </section>
  );
};

export default WorksDetail;
