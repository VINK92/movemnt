import { FC } from 'react';

import Img from '~/components/base/Img/Img';

import { IImgModifier } from '~/components/base/Img/img.interface';

interface ItemProps {
  image: IImgModifier;
}

const Item: FC<ItemProps> = ({ image }) => (
  <Img className="img-sliders" img={ image } quality={ 70 } priority={ image.priority } />
);

export default Item;
