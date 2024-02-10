import { IImg } from '~/components/base/Img/img.interface';

import img12 from '~/assets/img/new-content/main//1-new.jpeg';
import img13 from '~/assets/img/new-content/main/2.jpeg';
import img14 from '~/assets/img/new-content/main/3-new.jpeg';

// guy with towel
import img19 from '~/assets/img/new-content/main/rushnik.jpg';

// selena
import img22 from '~/assets/img/new-content/production/12/1.jpg';

// glasses
import img25 from '~/assets/img/new-content/production/3/1.jpg';

const images: IImg[][] = [
  [
    {
      id: 12,
      src: img12,
      alt: '',
    },
    {
      id: 13,
      src: img13,
      alt: '',
    },
    {
      id: 14,
      src: img14,
      alt: '',
    },
    {
      id: 19,
      src: img19,
      alt: '',
    },
    // {
    //   id: 22,
    //   src: img22,
    //   alt: '',
    // },
    {
      id: 25,
      src: img25,
      alt: '',
    },

  ],
];

const imagesMobile: IImg[][] = [
  [
    {
      id: 12,
      src: img12,
      alt: '',
    },
    {
      id: 13,
      src: img13,
      alt: '',
    },
    {
      id: 14,
      src: img14,
      alt: '',
    },
    {
      id: 19,
      src: img19,
      alt: '',
    },
    {
      id: 22,
      src: img22,
      alt: '',
    },
    {
      id: 25,
      src: img25,
      alt: '',
    },

  ],
];

export { images, imagesMobile };
