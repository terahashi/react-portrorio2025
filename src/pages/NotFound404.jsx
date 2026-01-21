import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import styled from 'styled-components';
import breakpoints from '../styles/breakpoints';

import { Wrapper, Inner } from '../components/common/LayoutPrimitives';
import ColorContext from '../contexts/ColorContext';

const NotFoundWrap = styled.section`
  background-color: #1e1c1c;
  min-height: 100vh;
  padding-top: calc(var(--header-height) + var(--res-pages-padding-top) + 50px);
  @media (min-width: ${breakpoints.tablet}) {
    padding-top: calc(var(--header-height) + var(--pages-padding-top) + 100px);
  }
`;

const NotFound404 = () => {
  //useContext(ColorContext)でHeaderの文字色を白にする
  const { setIsDark } = useContext(ColorContext);

  ////⬇︎ページに入った瞬間に「Headerの文字色を白にする」
  useEffect(() => {
    setIsDark(true);
    //⬇︎クリーンナップ;
    return () => {
      setIsDark(false);
    };
  }, []);

  return (
    <NotFoundWrap>
      <Wrapper>
        <Inner>
          <h1 className='text-center font-bold pb-5'>404 Not Found</h1>
          <p className='text-center leading-[2] pb-5'>
            ページが見つかりません
            <br />
            (Pages Not Found. Sorry...)
          </p>
          <p className='text-center leading-[2] pb-10'>恐れ入りますが「トップに戻る」を押下し、サイトトップへお戻りください。</p>

          <div className='text-center'>
            <Link to='/' className='underline text-[1.5rem] text-[var(--color-white)]' data-stalker>
              トップに戻る
            </Link>
          </div>
        </Inner>
      </Wrapper>
    </NotFoundWrap>
  );
};

export default NotFound404;
