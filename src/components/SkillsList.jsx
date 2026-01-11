import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import skillsData from '../data/skillsData';

const BorderLine = styled.div`
  background-color: var(--color-gray);
  width: 100%;
  height: 1px;
`;

const iconMap = {
  react: ['fab', 'react'],
};

const Skillslist = () => {
  return (
    <div>
      {skillsData.map((skills) => (
        <div className='mb-20 md:mb-20' key={skills.id}>
          <h2 className='mb-0 pb-2 text-[1.5rem] text-(--color-gray) font-[600]'>{skills.id}</h2>

          {/* gridを使用 */}
          <div className='grid-cols-none md:grid md:grid-cols-[auto_1fr] md:items-baseline gap-x-10 pb-2'>
            <div className='flex items-center gap-x-1'>
              <h3 className='pb-2 md:pb-2 mb-0 font-[600] text-[2.2rem] md:text-[2.2rem]'>{skills.skilltitle}</h3>
              <FontAwesomeIcon icon={iconMap[skills.icon]} size='2x' className='skill-icon pb-2 md:pb-2' />
            </div>
            <p className='pb-2'>{skills.years}</p>
          </div>

          <p className='text-(--color-gray) pb-5'>{skills.skillText}</p>

          <BorderLine />
        </div>
      ))}
    </div>
  );
};

export default Skillslist;
