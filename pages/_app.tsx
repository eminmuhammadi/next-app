import type { AppProps } from 'next/app';

import { MainLayout } from './../components/Layout/Main';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <div aria-label='Application' role="application">
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
};

export default MyApp
