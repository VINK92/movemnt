import { FC } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Img from '~/components/base/Img/Img';
import Menu from '~/components/layout/navigation/Menu/Menu';

import useBreakpointCheck from '~/hooks/useBreakpointCheck';

import Breakpoint from '~/enums/breakpoint.enum';

import movement from '~/assets/img/logos/movement.svg';

const Header: FC = () => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

  const logo = {
    src: movement,
    alt: 'Movement',
  };

  return (
    <header className={ clsx('header', isHomePage && 'header_homepage') }>
      <div className="header__container">
        {isMobile && isHomePage && (
          <Img className="header" img={ logo } resetStyle priority />
        )}
        <Menu />
      </div>
    </header>
  );
};

export default Header;
