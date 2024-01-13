import { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Keyboard,
  Autoplay,
} from 'swiper/modules';
import { IImg } from '~/components/base/Img/img.interface';
import handleSlidesPerView from '~/utils/slidesPerView';
import doubleArray from '~/utils/doubleArray';
import clsx from 'clsx';
import useActiveSlider from '~/hooks/useActiveSlider';
import Item from './Item';

interface ItemsProps {
  images: IImg[];
}

const Items: FC<ItemsProps> = ({ images }) => {
  const slidesPerView = handleSlidesPerView(images);
  const imgs = slidesPerView === 3 ? doubleArray(images) : images;

  const [ isAutoplay, setIsAutoplay ] = useState(false);

  const swiperRef = useRef<any>(null);

  useActiveSlider(swiperRef, setIsAutoplay);
  const imgSlides = imgs.map((img) => {
    const { id } = img;

    return (
      <SwiperSlide
        key={ id }
      >
        <Item key={ id } image={ img } />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      className={ clsx(isAutoplay && '_active') }
      ref={ swiperRef }
      modules={ [
        Navigation,
        Keyboard,
        Autoplay,
      ] }
      direction="horizontal"
      spaceBetween={ 0 }
      slidesPerView={ 1 }
      loop
      initialSlide={ 0 }
      autoplay={ false }
      speed={ 400 }
      slideActiveClass="swiper__active"
      centeredSlides
      navigation
      observer
    >
      {imgSlides}
    </Swiper>
  );
};

export default Items;
