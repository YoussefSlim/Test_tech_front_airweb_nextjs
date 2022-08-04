import classNames from 'classnames';
import { SWRConfig } from 'swr';

import { Footer, Header } from '@/components';
import '@/styles/globals.css';
import { useHttpClient } from '@/hooks';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const httpClient = useHttpClient();

  return (
    <SWRConfig value={{ fetcher: httpClient.get, errorRetryCount: 0 }}>
      <Header />
      <main className="min-h-mobile px-2 xl:min-h-desktop xl:w-3/5 xl:mx-auto xl:px-0 mt-[59px]">
        <div className={classNames('overflow-y-auto ')}>
          <Component {...pageProps} />
        </div>
      </main>
      <Footer />
    </SWRConfig>
  );
}

export default MyApp;
