import { useRef, useEffect } from 'react';
import initType from '../animations/initType';

const TypingText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    initType(textRef);
  }, []);

  return <h2 ref={textRef} className='ityped text-[4.5rem] text-[#000] font-extrabold'></h2>;
};

export default TypingText;
