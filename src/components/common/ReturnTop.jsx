import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const PageTop = styled.button`
//   background-color: #000;
//   padding: 10px;
//   border-radius: 10px;
// `;

const ReturnTop = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className='mb-50' onClick={returnTop} aria-label='ページの最上部へ戻る'>
      Pages Top
      <FontAwesomeIcon icon={['fas', 'arrow-turn-up']} />
    </button>
  );
};

export default ReturnTop;
