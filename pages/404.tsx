import type { NextPage } from 'next';
import ErrorComponent from './_error';

const Home: NextPage = () => {
  return (
    <ErrorComponent statusCode={404} />
  );
};

export default Home;
