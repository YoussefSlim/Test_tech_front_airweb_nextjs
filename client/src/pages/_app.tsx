import { useMemo } from 'react';

import classNames from 'classnames';
import { ToastContainer } from 'react-toastify';
import { SWRConfig } from 'swr';

import { Footer, Header } from '@/components';
import '@/styles/globals.css';
import '@/styles/toastify.css';
import { CartContext } from '@/contexts';
import { useCart, useHttpClient } from '@/hooks';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const httpClient = useHttpClient();
  const { products, toggleAddProductToCart } = useCart();

  return (
    <SWRConfig value={{ fetcher: httpClient.get, errorRetryCount: 0 }}>
      <CartContext.Provider
        value={useMemo(
          () => ({ products, toggleAddProductToCart }),
          [products, toggleAddProductToCart]
        )}
      >
        <Header />
        <main className="min-h-mobile px-2 xl:min-h-desktop xl:w-3/5 xl:mx-auto xl:px-0 mt-[59px]">
          <div className={classNames('overflow-y-auto ')}>
            <Component {...pageProps} />
          </div>
        </main>
        <Footer />
      </CartContext.Provider>
      <ToastContainer autoClose={3000} position="bottom-right" />
    </SWRConfig>
  );
}

export default MyApp;
