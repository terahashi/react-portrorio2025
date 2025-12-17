//Works.jsxファイルで使用するため、部品化

const WorksItem = ({ work }) => {
  return (
    <div className='w__item' key={work.id}>
      {/* <a href={work.link} target='_blank' rel='noopener noreferrer'> */}
      <img src={work.image} alt={work.title} />
      {/* </a> */}
    </div>
  );
};

export default WorksItem;
