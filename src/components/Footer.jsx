import { Wrapper, Inner } from './common/LayoutPrimitives';

const Footer = () => {
  return (
    <div className='p-2 text-center bg-[#1e1c1c] text-[var(--color-white)]'>
      <Wrapper>
        <Inner>© 2026 Takahashi. All Rights Reserved.</Inner>
      </Wrapper>
    </div>
  );
};

export default Footer;
