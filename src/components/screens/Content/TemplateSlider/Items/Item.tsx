import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';

export interface IStudioImg {
  id: number;
  src: StaticImageData ;
  alt: string;
  backgroundColor: string;
  backgroundImage?: StaticImageData;
  modifier?: string;
}

interface Props {
  image: IStudioImg;
}

const Item: FC<Props> = ({ image }) => (
  <div
    style={ image.backgroundImage ? { backgroundImage: `url(${ image.backgroundImage.src })` } : { backgroundColor: image.backgroundColor } }
    className={ clsx('image__container', image.modifier) }
  >
    <Image
      src={ image.src }
      alt={ image.alt }
      quality={ 70 }
      width={ image.id === 36 ? image.src.width : 987 }
      height={ 555 }
      className="image__item"
    />
  </div>
);
export default Item;
