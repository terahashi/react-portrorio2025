import styled from 'styled-components';

const HoverWrap = styled.section`
  position: fixed;
  top: ${({ y }) => y - 150}px; //マウス追従のUIはpx指定一択。「マウスのY座標から 110px 上に表示する」
  left: ${({ x }) => x - 200}px; //「マウスのX座標から 200px 左に表示する」
  pointer-events: none;
  z-index: 999;

  @media (hover: none) {
    display: none;
  }
  .works_preview {
    background-color: #080808;
    padding: 17px;
    width: 400px;
  }
  img,
  video {
    width: 100%;
    display: block;
  }
`;

const WorksHover = ({ work, mousePos }) => {
  if (!work) return null;

  return (
    /* hoverしたらプレビュー */
    <HoverWrap x={mousePos.x} y={mousePos.y}>
      <div className='works_preview'>
        {/* {work.video ? <video src={work.video} autoPlay muted loop /> : <img src={work.image} alt={work.title} />} */}
        {/* <img src={work.image} alt={work.title} /> */}

        <img src={work.hoverthumbnail} alt={work.title} />

        <h4 className='mt-[10px] mb-[0]'>{work.title}</h4>
      </div>
    </HoverWrap>
  );
};

export default WorksHover;
