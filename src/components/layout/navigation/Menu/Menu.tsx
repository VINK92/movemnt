import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import links from '~/components/layout/navigation/links/links.const';

import Items from './Items/Items';

const Menu: FC = () => {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

  return (
    <div className="header__menu menu">
      <nav className="menu__body">
        <ul className={ clsx('menu__list', isHomePage && 'menu__list_homepage') }>
          <Items links={ links } />
          {!isHomePage && (
            <Link href="/" className="menu__link menu__link_homepage">
              Back
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
