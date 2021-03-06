import type { NextPage } from 'next';
import ErrorComponent from './_error';

const Error: NextPage = () => {
  return (
    <ErrorComponent statusCode={404} />
  );
};

export default Error;