import { FC } from 'react';

import ImgSliders from '~/components/shared/ImgSliders/ImgSliders';

import useBreakpointCheck from '~/hooks/useBreakpointCheck';

import Breakpoint from '~/enums/breakpoint.enum';
import { images, mobileImages } from './images.const';

const Sliders: FC = () => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);

  return <ImgSliders className="production" images={ isMobile ? mobileImages : images } />;
};

export default Sliders;
