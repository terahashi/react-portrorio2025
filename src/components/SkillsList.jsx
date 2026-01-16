import { useState } from 'react';

import styled from 'styled-components';
import skillsData from '../data/skillsData';
import breakpoints from '../styles/breakpoints';

const BorderLine = styled.div`
  background-color: var(--color-gray);
  width: 100%;
  height: 1px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Skillslist = () => {
  return (
    <div>
      {skillsData.map((skills) => (
        <div className='mb-20 md:mb-20' key={skills.id}>
          {/* スキル番号 */}
          <h2 className='pb-0 md:pb-2 mb-0 md:mb-0 text-[2rem] md:text-[1.5rem] text-(--color-gray) font-[600]'>{skills.id}</h2>

          <div className='grid-cols-none md:grid md:grid-cols-[auto_1fr] md:items-baseline gap-x-7 pb-1 md:pb-1'>
            <div className='flex items-center gap-x-2'>
              {/* スキル タイトル(Reactなど) */}
              <h3 className='pb-2 md:pb-1 mb-0 md:mb-0 font-[600] text-[2.2rem] md:text-[2.2rem]'>{skills.skilltitle}</h3>

              {/* アイコン */}
              {skills.icon?.map((src, index) => {
                return <img key={index} src={src} alt={skills.skilltitle} className='w-[30px] pb-2 md:pb-1 mb-0 md:mb-0' />;
              })}
            </div>
            {/* 年数 */}
            <p className='pb-2 md:pb-1 text-[1rem] md:text-[1rem]'>{skills.years}</p>
          </div>
          {/* 解説 */}
          <p className='text-(--color-gray) pb-5 md:pb-8 md:max-w-lg lg:max-w-xl'>{skills.skillText}</p>

          {/* 下線 */}
          <BorderLine />
        </div>
      ))}
    </div>
  );
};

export default Skillslist;
