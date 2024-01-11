import { FC } from 'react';

import SliderSwiper from '~/components/base/SliderSwiper/SliderSwiper';

import handleSlidesPerView from '~/utils/slidesPerView';

import { IImgModifier } from '~/components/base/Img/img.interface';

import doubleArray from '~/utils/doubleArray';
import Item from './Item';

interface ItemsProps {
  images: IImgModifier[];
}

const Items: FC<ItemsProps> = ({ images }) => {
  const modifier = images[0]?.modifier;

  const slidesPerView = handleSlidesPerView(images);
  const imgs = slidesPerView === 3 ? doubleArray(images) : images;

  const imgSlides = imgs.map((img) => {
    const { id } = img;

    return <Item key={ id } image={ img } />;
  });

  return (
    <SliderSwiper
      spaceBetween={ -1 }
      className="img-sliders"
      modifier={ `img-sliders__slider_${ modifier }` }
      navigation
      breakpoints={ {
        767.98: {
          slidesPerView,
        },
      } }
    >
      {imgSlides}
    </SliderSwiper>
  );
};

export default Items;
