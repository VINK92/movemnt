import { IImgModifier } from '~/components/base/Img/img.interface';

interface IHandleSlidesPerView {
  (imgs: IImgModifier[]): number;
}

const handleSlidesPerView: IHandleSlidesPerView = (imgs) => {
  const { length } = imgs;
  const firstImg = imgs[0];
  const { src } = firstImg;
  const { width, height } = src;
  const isHorizontal = width > height;

  if (isHorizontal) {
    return 1;
  }

  switch (length) {
    case 1:
      return 1;

    case 2:
      return 2;

    default:
      return 3;
  }
};

export default handleSlidesPerView;
