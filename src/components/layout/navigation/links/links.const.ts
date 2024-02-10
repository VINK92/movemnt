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
    },
    path: '/studio',
    altImg: {
      src: ms,
      alt: 'Ms',
    },
  },
  {
    img: {
      src: movementProduction,
      alt: 'Movemnt’Production',
    },
    path: '/production',
    altImg: {
      src: mp,
      alt: 'Mp',
    },
  },
];

export default links;
