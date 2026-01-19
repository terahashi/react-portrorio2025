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

import { Wrapper, Inner } from '../../components/common/LayoutPrimitives';
import styled from 'styled-components';
import breakpoints from '../../styles/breakpoints';

import SideFixed from '../../components/SideFixed';
import worksData from '../../data/worksData';
import ParagraphSection from '../../components/ParagraphSection';
import ReturnTopButton from '../../components/ReturnTop';

const DetailWrap = styled.section`
  background-color: #1e1c1c;
  padding-top: calc(var(--header-height) + var(--res-pages-padding-top));
  @media (min-width: ${breakpoints.tablet}) {
    padding-top: calc(var(--header-height) + var(--pages-padding-top));
  }
`;

const WorksDetail = () => {
  //useContext(ColorContext)でHeaderの文字色を白にする
  const { setIsDark } = useContext(ColorContext);

  //idでページURL取得
  const { id } = useParams();
  const workdetail = worksData.find((item) => item.id === Number(id));

  //🔥404ページ
  if (!workdetail) {
    return <Navigate to='/404' replace />;
  }

  ////⬇︎ページに入った瞬間に「Headerの文字色を白にする」
  useEffect(() => {
    setIsDark(true);
    //⬇︎クリーンナップ;
    return () => {
      setIsDark(false);
    };
  }, [setIsDark]);

  return (
    <DetailWrap>
      <Wrapper>
        <Inner>
          <div className='mb-[70px] md:mb-[100px]'>
            <h1 className='text-[2.5rem] md:text-[3rem] font-extrabold'>{workdetail.title}</h1>
            <p>{workdetail.desctription}</p>
          </div>

          <SideFixed visitsite={workdetail.visitsite} url={workdetail.url}>
            <div className='mb-[50px] md:mb-[100px]'>
              <div className='w-full pb-10'>
                <video src={workdetail.videos} autoPlay muted loop playsInline />
              </div>

              <div className='w-full pb-10'>
                <img src={workdetail.image} alt={workdetail.titke} />
              </div>
            </div>
          </SideFixed>

          <ParagraphSection className='text-center mb-[10px]' title='PORTFOLIO2025'></ParagraphSection>

          <ReturnTopButton />

          {/* <Link to='/' className='back-home'>
            ← トップに戻る
          </Link> */}
        </Inner>
      </Wrapper>
    </DetailWrap>
  );
};

export default WorksDetail;
