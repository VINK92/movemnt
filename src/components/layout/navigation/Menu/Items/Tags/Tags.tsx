import { FC } from 'react';
import clsx from 'clsx';
import Tag from './Tag';
import { ITag } from './tag.interface';

interface TagsProps {
  tags: ITag[];
  modifier?: string;
}

const Tags: FC<TagsProps> = ({ tags, modifier }) => {
  const tagItems = tags.map((tag) => {
    const { id } = tag;

    return <Tag key={ id } tag={ tag } />;
  });

  return (
    <div className={ clsx('menu__tags', modifier && `menu__tags_${ modifier }`) }>
      {tagItems}
    </div>
  );
};

Tags.defaultProps = {
  modifier: undefined,
};

export default Tags;
