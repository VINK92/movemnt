import React from 'react';
import { IStudioImg } from '~/components/screens/Content/TemplateSlider/Items/Item';
import Items from './Items/Items';

interface Props {
  images: IStudioImg[][];
}

const TemplateSlider: React.FC<Props> = ({ images }) => {
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
    <section>
      {imgSliders}
    </section>
  );
};

export default TemplateSlider;
