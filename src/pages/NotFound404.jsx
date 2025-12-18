import { Link } from 'react-router-dom';

const NotFound404 = () => {
  return (
    <section>
      <h1>404 Not Found</h1>
      <p>ページが見つかりません</p>

      <Link to='/' className='back-home'>
        トップに戻る
      </Link>
    </section>
  );
};

export default NotFound404;
