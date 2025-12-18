//Works.jsxファイルで使用するため、部品化
import { Link } from 'react-router-dom';

const WorksItem = ({ work }) => {
  return (
    <div className='w__item' key={work.id}>
      {/* ⬇︎今回使用した<Link to={/works/${work.id}}> この書き方はテンプレートリテラルであり「URLルール(遷移先)が"コード側にある"」*/}
      <Link to={`/works/${work.id}`}>
        <img src={work.image} alt={work.title} />
      </Link>

      {/* ⬇︎下記の<Link to={work.link}>の場合は「URLルール(遷移先)が"配列データ(worksData.js)に含まれている"」*/}
      {/* <Link to={work.link}>
        <img src={work.image} alt={work.title} />
      </Link> */}
    </div>
  );
};

export default WorksItem;
