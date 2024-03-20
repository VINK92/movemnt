import movementAgency from '~/assets/img/logos/movement-studio2.svg';
import movementProduction from '~/assets/img/logos/movement-production2.svg';
import ms from '~/assets/img/logos/ms2.svg';
import mp from '~/assets/img/logos/mp2.svg';

import { ILink } from './link.interface';

const links: ILink[] = [
  {
    img: {
      src: movementAgency,
      alt: 'Movemnt’Studio',
      priority: true,
    },
    path: '/studio',
    altImg: {
      src: ms,
      alt: 'Ms',
      priority: true,
    },
  },
  {
    img: {
      src: movementProduction,
      alt: 'Movemnt’Production',
      priority: true,
    },
    path: '/production',
    altImg: {
      src: mp,
      alt: 'Mp',
      priority: true,
    },
  },
];

export default links;
