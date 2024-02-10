import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Img from '~/components/base/Img/Img';

import useBreakpointCheck from '~/hooks/useBreakpointCheck';

import Breakpoint from '~/enums/breakpoint.enum';

import { ILink } from '~/components/layout/navigation/links/link.interface';
import Tags from './Tags/Tags';
import productionTags from './Tags/constants/productionTags.const';
import contentTags from './Tags/constants/contentTags.const';

interface ItemProps {
  link: ILink;
}

const Item: FC<ItemProps> = ({ link: { img, path, altImg } }) => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);
  const { pathname } = useRouter();

  const isCurrentPage = pathname === path;
  const isHomePage = pathname === '/';
  const isContentPage = pathname === '/studio';
  const isProductionPage = pathname === '/production';

  const link = <Img className="menu" img={ img } priority />;
  const altLink = <Img className="menu" img={ altImg } priority />;

  return isHomePage || (!isHomePage && !isMobile) ? (
    <li className="menu__item">
      <div>
        <Link
          href={ path }
          className={ clsx('menu__link', isMobile && 'menu__link_alt') }
        >
          {isMobile ? altLink : link}
        </Link>
      </div>
      {!isMobile && <Link href={ path } className="menu__link menu__link_alt">{altLink}</Link>}
      {!isMobile && isCurrentPage && isContentPage && (
        <Tags tags={ contentTags } />
      )}
      {!isMobile && isCurrentPage && isProductionPage && (
        <Tags tags={ productionTags } modifier="short" />
      )}
    </li>
  ) : (
    isCurrentPage && (
      <li className="menu__item">
        <Link href={ path } className="menu__link">
          {link}
        </Link>
      </li>
    )
  );
};

export default Item;
