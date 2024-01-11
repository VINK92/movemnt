import { FC } from 'react';

import Items from './Items/Items';

import images from './images.const';

const MainSlider: FC = () => {
  const imgSliders = images.map((imgGroup) => {
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
