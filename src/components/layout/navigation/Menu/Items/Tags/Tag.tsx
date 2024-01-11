import { FC } from 'react';

import { ITag } from './tag.interface';

interface TagProps {
  tag: ITag;
}

const Tag: FC<TagProps> = ({ tag: { modifier, value } }) => (
  <span className={ `menu__tag menu__tag_${ modifier }` }>
    <span>{value}</span>
  </span>
);

export default Tag;
