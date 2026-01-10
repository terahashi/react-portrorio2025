import { useRef, useEffect } from 'react';
import initType from '../animations/InitType';
import styled from 'styled-components';

const Brand = styled.span`
  color: #000000;
  font-size: 1.5rem;
  font-weight: bold;
  display: block;
`;

const TypingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    initType(textRef);
  }, []);

  return (
    <>
      <Brand>MY PORTFORIO</Brand>
      <p ref={textRef} className='ityped text-[0.9rem] md:text-[1rem] text-[#71685b] '></p>
    </>
  );
};

export default TypingText;
