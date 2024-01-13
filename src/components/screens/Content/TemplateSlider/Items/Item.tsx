import { CSSProperties, FC } from 'react';
import Image, { StaticImageData } from 'next/image';
// import clsx from 'clsx';
import { IImgModifier } from '~/components/base/Img/img.interface';

export interface IStudioImg extends IImgModifier {
  id: number;
  src: StaticImageData ;
  alt: string;
  backgroundColor: string;
  backgroundImage?: StaticImageData;
}

interface Props {
  image: IStudioImg;
}

const Item: FC<Props> = ({ image }) => {
  const generateTemplateStyles = (): CSSProperties => (image.backgroundImage
    ? {
      backgroundImage: `url(${ image.backgroundImage.src })`,
    } : {
      backgroundColor: image.backgroundColor,
    });
  return (
    <div
      style={ generateTemplateStyles() }
      className="image__container"
    >
      <Image priority={ image.id === 11 } className="image__item" width="987" height="555" alt="alt text" src={ image.src } />
    </div>
  );
};

export default Item;
