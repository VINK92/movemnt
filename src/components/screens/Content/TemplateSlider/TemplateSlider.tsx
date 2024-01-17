/* eslint-disable react/no-array-index-key */
import React from 'react';
import { IStudioImg } from '~/components/screens/Content/TemplateSlider/Items/Item';
import FullScreenItems from '~/components/shared/ImgSliders/Items/Items';
import TemplateItems from './Items/Items';

interface Props {
  images: IStudioImg[][];
}

const TemplateSlider: React.FC<Props> = ({ images }) => {
  const imgSliders = images.map((imgGroup, index) => {
    // const { id } = imgGroup[0];
    const isFullScreenSizeSlide = index === 0 || index % 2 === 0 || index === 7;
    if (isFullScreenSizeSlide) {
      return (
        <FullScreenItems
          key={ index + 3 }
          images={ imgGroup }
        />
      );
    }
    return (
      <TemplateItems
        key={ index + 2 }
        images={ imgGroup }
      />
    );
  });

  return (
    <section>
      {imgSliders}
    </section>
  );
};

export default TemplateSlider;
