import { FC } from 'react';

import SliderSwiper from '~/components/base/SliderSwiper/SliderSwiper';

import handleSlidesPerView from '~/utils/slidesPerView';
import doubleArray from '~/utils/doubleArray';

import { IImg } from '~/components/base/Img/img.interface';
import Item from './Item';

interface ItemsProps {
  images: IImg[];
}

const Items: FC<ItemsProps> = ({ images }) => {
  const slidesPerView = handleSlidesPerView(images);
  const imgs = slidesPerView === 3 ? doubleArray(images) : images;

  const imgSlides = imgs.map((img) => {
    const { id } = img;

    return <Item key={ id } image={ img } />;
  });

  return (
    <SliderSwiper
      className="main-slider"
      slidesPerView="auto"
      mousewheel
    >
      {imgSlides}
    </SliderSwiper>
  );
};

export default Items;
