import { FC } from 'react';

import SliderSwiper from '~/components/base/SliderSwiper/SliderSwiper';

import handleSlidesPerView from '~/utils/slidesPerView';
import doubleArray from '~/utils/doubleArray';

import { IImgModifier, UnionSlideType } from '~/components/base/Img/img.interface';
import FullScreenVideo from '~/components/FullScreenVideo';
import Item from './Item';

interface ItemsProps {
  images: UnionSlideType[];
}

const Items: FC<ItemsProps> = ({ images }) => {
  const slidesPerView = handleSlidesPerView(images as IImgModifier[]);
  const imgs = slidesPerView === 3 ? doubleArray(images) : images;

  const imgSlides = imgs.map((img) => {
    const { id, src } = img;
    const isVideo = typeof img.src === 'string';
    if (isVideo) {
      return <FullScreenVideo key={ id } src={ src } />;
    }
    return <Item key={ id } image={ img } />;
  });

  return (
    <SliderSwiper
      className="main-slider"
      slidesPerView="auto"
      // mousewheel
    >
      {imgSlides}
    </SliderSwiper>
  );
};

export default Items;
