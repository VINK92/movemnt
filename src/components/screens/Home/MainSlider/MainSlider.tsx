import { FC } from 'react';

import useBreakpointCheck from '~/hooks/useBreakpointCheck';
import Breakpoint from '~/enums/breakpoint.enum';
import Items from './Items/Items';

import { images, imagesMobile } from './images.const';

const MainSlider: FC = () => {
  const isMobile = useBreakpointCheck(Breakpoint.Mobile);
  const mainContent = isMobile ? imagesMobile : images;
  const imgSliders = mainContent.map((imgGroup) => {
    const { id } = imgGroup[0];

    return (
      <Items
        key={ id }
        images={ imgGroup }
      />
    );
  });

  return (
    <section className="main-slider">
      {imgSliders}
    </section>
  );
};

export default MainSlider;
