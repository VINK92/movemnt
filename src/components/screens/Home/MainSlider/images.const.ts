import { IImg } from '~/components/base/Img/img.interface';

import img12 from '~/assets/img/new-content/main/1-new.jpeg';
import img15 from '~/assets/img/new-content/main/red.gif';
import img15mob from '~/assets/img/new-content/main/red-mob.gif';
import img13 from '~/assets/img/new-content/main/2.jpeg';
import img14 from '~/assets/img/new-content/main/3-new.jpeg';
import img16 from '~/assets/img/new-content/main/nb.gif';
import img16mob from '~/assets/img/new-content/main/nb-mob.gif';

// guy with towel
import img19 from '~/assets/img/new-content/main/rushnik.jpg';

// selena
import img25 from '~/assets/img/new-content/production/3/1.jpeg';
// glasses
import img22 from '~/assets/img/new-content/production/12/1.jpeg';
import img23 from '~/assets/img/new-content/production/12/2.jpeg';
import img24 from '~/assets/img/new-content/production/12/3.jpeg';

const images: IImg[][] = [
  [
    {
      id: 12,
      src: img12,
      alt: '',
      priority: false,
    },
    // red
    {
      id: 15,
      src: img15,
      alt: '',
      priority: true,
    },
    {
      id: 13,
      src: img13,
      alt: '',
      priority: false,
    },
    {
      id: 14,
      src: img14,
      alt: '',
      priority: false,
    },
    {
      id: 16,
      src: img16,
      alt: '',
      priority: true,
    },
    {
      id: 19,
      src: img19,
      alt: '',
      priority: false,
    },
    {
      id: 22,
      src: img22,
      alt: '',
      priority: false,
    },
    {
      id: 23,
      src: img23,
      alt: '',
      priority: false,
    },
    {
      id: 24,
      src: img24,
      alt: '',
      priority: false,
    },
    {
      id: 25,
      src: img25,
      alt: '',
      priority: false,
    },

  ],
];

const imagesMobile: IImg[][] = [
  [
    {
      id: 12,
      src: img12,
      alt: '',
      priority: false,
    },
    {
      id: 15,
      src: img15mob,
      alt: '',
      priority: true,
    },
    {
      id: 13,
      src: img13,
      alt: '',
      priority: false,
    },
    {
      id: 14,
      src: img14,
      alt: '',
      priority: false,
    },
    {
      id: 16,
      src: img16mob,
      alt: '',
      priority: true,
    },
    {
      id: 19,
      src: img19,
      alt: '',
      priority: false,
    },
    {
      id: 22,
      src: img22,
      alt: '',
      priority: false,
    },
    {
      id: 25,
      src: img25,
      alt: '',
      priority: false,
    },

  ],
];

export { images, imagesMobile };
