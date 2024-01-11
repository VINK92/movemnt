import { FC } from 'react';
import Link from 'next/link';

import FullScreen from '~/components/base/FullScreen/FullScreen';

import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: [ 'latin' ],
});

const Page404: FC = () => (
  <FullScreen className={ `${ openSans.className } not-found` }>
    <div className="not-found__container">
      <h1 className="not-found__title">404 Not Found</h1>
      <Link className="not-found__link" href="/">
        Homepage
      </Link>
    </div>
  </FullScreen>
);

export default Page404;
