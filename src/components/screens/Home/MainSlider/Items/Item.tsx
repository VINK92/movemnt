import { FC } from 'react';

import Img from '~/components/base/Img/Img';

import { IImg } from '~/components/base/Img/img.interface';

interface ItemProps {
  image: IImg;
}

interface IGenerateStyles {
  (image: IImg): {
    width: string;
  };
}

const generateStyles: IGenerateStyles = (image) => {
  const { src } = image;
  const { width, height } = src;
  const isHorizontal = width > height;

  return {
    width: isHorizontal ? '100vw' : 'calc(100vw / 3)',
  };
};

const Item: FC<ItemProps> = ({ image }) => (
  <Img
    className="main-slider"
    img={ image }
    quality={ 70 }
    style={ generateStyles(image) }
  />
);

export default Item;
