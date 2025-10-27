import RandomText from '../components/RandomText.jsx';

const Home = () => {
  return (
    <div>
      <h1>Home トップページです。</h1>
      <RandomText text='My Name is Takahashi Web Engineer' speed={300} />
    </div>
  );
};

export default Home;
