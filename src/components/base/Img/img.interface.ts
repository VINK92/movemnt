import { StaticImageData } from 'next/image';

export interface IImg {
  id?: number;
  src: StaticImageData ;
  alt: string;
}

export interface IImgModifier extends IImg {
  modifier?: string;
}
