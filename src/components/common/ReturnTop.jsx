import { useEffect } from 'react';

const ReturnTopButton = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button className='mb-50' onClick={returnTop}>
      Pages Top
    </button>
  );
};

export default ReturnTopButton;
