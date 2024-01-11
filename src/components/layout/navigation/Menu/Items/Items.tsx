import { FC } from 'react';

import { ILink } from '~/components/layout/navigation/links/link.interface';
import Item from './Item';

interface ItemsProps {
  links: ILink[];
}

const Items: FC<ItemsProps> = ({ links }) => (
  links.map((link) => {
    const { path } = link;

    return <Item key={ path } link={ link } />;
  })
);

export default Items;
