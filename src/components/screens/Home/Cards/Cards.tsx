import { FC } from 'react';

import useBreakpointCheck from '~/hooks/useBreakpointCheck';
import Breakpoint from '~/enums/breakpoint.enum';
import DesktopCards from '~/components/screens/Home/Cards/Items/DesktopCards';
import MobileCards from './Items/MobileCards';

const Cards: FC = () => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);

  return isMobile ? <div className="cards"><MobileCards /></div> : <DesktopCards />;
};

export default Cards;
