import HeroscrambleText from '../components/HeroscrambleText';

const Home = () => {
  return (
    <div className='bg-blue-500 w-full h-screen'>
      <h1 className='bg-[#da5555] !m-0'>Home トップページです。</h1>
      <HeroscrambleText />
      <div className='bg-custom-yellow'>
        <h1>子要素(背景黄色はbg-custom-yellowの「Tailwindcssのカスタム」)</h1>
      </div>
    </div>
  );
};

export default Home;
