import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes'

import { MainLayout } from './../components/Layout/Main';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div aria-label='Application' role="application">
      <ThemeProvider attribute="class">
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </div>
  );
};

export default MyApp
