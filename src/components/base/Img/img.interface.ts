import { StaticImageData } from 'next/image';

export interface IImg {
  id?: number;
  src: StaticImageData | string;
  alt: string;
  priority: boolean,
}

export interface IImgModifier extends IImg {
  modifier?: string;
}
