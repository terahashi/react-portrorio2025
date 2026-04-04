//Works.jsxファイルで使用するため、部品化
import { Link } from 'react-router-dom';

const WorksItem = ({ work, onHover }) => {
  return (
    <div className='w__item' onMouseEnter={() => onHover(work)} onMouseLeave={() => onHover(null)}>
      {/* <Link to={`/works/${work.id}`} data-stalker>
        <video src={work.videos} autoPlay muted loop playsInline />
      </Link> */}

      <Link to={`/works/${work.id}`} data-stalker>
        <img src={work.sitethumbnail} width='450' height='300' alt={`${work.title}のサムネイル`} />
        <p className='text-[0.7rem] md:text-[1rem] text-center mt-[10px] mb-0'>{work.title}</p>
      </Link>
    </div>
    //preload="metadata" で「動画の長さやサイズ を最低限だけ取得」
    //今回使用した{`/works/${work.id}`} ⬅︎この書き方はテンプレートリテラルであり「URLルール(遷移先)が"コード側にある"」
  );
};

export default WorksItem;
