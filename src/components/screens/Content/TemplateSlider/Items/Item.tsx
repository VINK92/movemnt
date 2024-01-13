import { FC } from 'react'; // CSSProperties,
import Image, { StaticImageData } from 'next/image';
// import clsx from 'clsx';

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
  // const generateTemplateStyles = (): CSSProperties => (image.backgroundImage
  //   ? {
  //     backgroundImage: `url(${ image.backgroundImage.src })`,
  //   } : {
  //     backgroundColor: image.backgroundColor,
  //   });
  <div
    style={ image.backgroundImage ? { backgroundImage: `url(${ image.backgroundImage.src })` } : { backgroundColor: image.backgroundColor } }
    className="image__container"
  >
    <Image
      src={ image.src }
      alt="alt text"
      priority // ={ image.id === 11 }
      quality={ 70 }
      width="987"
      height="555"
      rel="preconnect" // dns-prefetch
      loading="eager"
      className="image__item"
    />
  </div>
);
export default Item;
