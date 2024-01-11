import { FC } from 'react';
import Head from 'next/head';

interface MetaProps {
  title: string;
}

const Meta: FC<MetaProps> = ({ title }) => {
  const modifiedTitle = `${ title } — Movement`;

  return (
    <Head>
      {/* A brief description of the page  */}
      <meta name="description" content="" />
      {/* Search robots access control to the page */}
      <meta name="robots" content="index,follow" />
      <title>{modifiedTitle}</title>
    </Head>
  );
};

export default Meta;
