import classNames from 'classnames';

import { Footer, Header } from '@/components';

import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="min-h-mobile px-2 xl:min-h-desktop xl:w-3/5 xl:mx-auto xl:px-0 ">
        <div className={classNames('overflow-y-auto')}>
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
