import { FC } from 'react';
import clsx from 'clsx';

import { IImgModifier } from '~/components/base/Img/img.interface';
import Items from './Items/Items';

interface ImgSlidersProps {
  className: string;
  modifier?: string;
  images: IImgModifier[][];
}

const ImgSliders: FC<ImgSlidersProps> = ({
  className,
  modifier,
  images,
}) => {
  const imgSliders = images.map((imgGroup) => {
    const { id } = imgGroup[0];

    return (
      <Items
        key={ id }
        images={ imgGroup }
      />
    );
  });

  return (
    <section className={ clsx(`${ className }__img-sliders`, modifier, 'img-sliders') }>
      {imgSliders}
    </section>
  );
};

export default ImgSliders;
