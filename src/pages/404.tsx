import { NextPage } from 'next';
import Head from 'next/head';
import PageNotFound from '~/components/screens/404/404';

const Page404: NextPage = () => (
  <>
    <Head>
      <title>404 Not Found</title>
    </Head>
    <PageNotFound />
  </>
);

export default Page404;
