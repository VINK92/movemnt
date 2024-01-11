import movementAgency from '~/assets/img/logos/movement-studio.svg';
import movementProduction from '~/assets/img/logos/movement-production.svg';
import ms from '~/assets/img/logos/ms.svg';
import mp from '~/assets/img/logos/mp.svg';

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
