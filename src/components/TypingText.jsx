import { useRef, useEffect } from 'react';
import initType from '../animations/InitType';

const TypingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    initType(textRef);
  }, []);

  return <p ref={textRef} className='ityped text-[1rem] md:text-[1.5rem] text-[#000]'></p>;
};

export default TypingText;
