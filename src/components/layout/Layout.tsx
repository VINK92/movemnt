import { FC, ReactNode } from 'react';

import { Inter } from 'next/font/google';
import Breakpoint from '~/enums/breakpoint.enum';
import useBreakpointCheck from '~/hooks/useBreakpointCheck';
import Meta from './Meta';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const inter = Inter({
  subsets: [ 'latin' ],
});

interface LayoutProps {
  title: string;
  className: string;
  children: ReactNode;
  footer?: boolean;
}

const Layout: FC<LayoutProps> = ({
  title,
  className,
  children,
  footer = true,
}) => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);
  return (
    <>
      <Meta title={ title } />
      <div className={ `wrapper ${ inter.className }` }>
        <Header />
        <main className={ `${ className }-page` }>{children}</main>
        {footer && isMobile && <Footer />}
      </div>
    </>
  );
};

export default Layout;
