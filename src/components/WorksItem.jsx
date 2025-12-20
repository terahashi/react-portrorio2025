//Works.jsxファイルで使用するため、部品化
import { Link } from 'react-router-dom';

const WorksItem = ({ work, onHover }) => {
  return (
    <div className='w__item' key={work.id} onMouseEnter={() => onHover(work)} onMouseLeave={() => onHover(null)}>
      <Link to={`/works/${work.id}`}>
        {/* ⬇︎メモ:mp4動画にする */}
        <img src={work.image} alt={work.title} />
      </Link>
      {/* ⬆︎今回使用した {`/works/${work.id}`} この書き方はテンプレートリテラルであり「URLルール(遷移先)が"コード側にある"」*/}
    </div>
  );
};

export default WorksItem;
