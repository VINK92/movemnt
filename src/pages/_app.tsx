import type { AppProps } from 'next/app';
import Head from 'next/head';
import '~/assets/scss/globals.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    </Head>
    <Component { ...pageProps } />
  </>
);

export default App;
