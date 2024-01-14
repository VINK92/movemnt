import {
  Html, Head, Main, NextScript,
} from 'next/document';
import { SpeedInsights } from '@vercel/speed-insights/next';

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="apple-touch-icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
      <SpeedInsights />
    </body>
  </Html>
);

export default Document;
