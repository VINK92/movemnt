import { StaticImageData } from 'next/image';

export interface IImg {
  id?: number;
  src: StaticImageData;
  alt: string;
  priority: boolean,
}

export interface IVideo {
  id?: number;
  src: string;
  alt: string;
  priority: boolean,
}

export type UnionSlideType = IImg | IVideo;

export interface IImgModifier extends IImg {
  modifier?: string;
}
