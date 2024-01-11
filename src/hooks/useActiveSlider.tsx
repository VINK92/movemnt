import { RefObject, useCallback } from 'react';

import useWindowListener from '~/hooks/useWindowListener';

import { TypeSetState } from '~/types/setState.type';

interface IUseActiveSlider {
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  (objectRef: RefObject<any>, setState: TypeSetState<any>): void
}

const useActiveSlider: IUseActiveSlider = (objectRef, setState) => {
  const handleScroll = useCallback(() => {
    if (typeof objectRef !== 'string') {
      const { current: objectElement } = objectRef;

      const objectRect = objectElement.getBoundingClientRect();
      const { top } = objectRect;

      const { innerHeight } = window;

      if (top >= -0.5 * innerHeight && top <= 0.5 * innerHeight) {
        setState(true);
      } else {
        setState(false);
      }
    }
  }, [ objectRef, setState ]);
  useWindowListener('scroll', handleScroll);
};

export default useActiveSlider;

// For className
// const handleScroll = useCallback(() => {
//   const sliders = document.querySelectorAll(`.${ className }__slider`);
//   const tags = modifier && document.querySelectorAll(`.menu__tag_${ modifier }`);

//   const { innerHeight } = window;
//   let activeSlider = sliders[0];

//   /* eslint-disable-next-line no-restricted-syntax */
//   for (const slider of sliders) {
//     const sliderRect = slider.getBoundingClientRect();
//     if (sliderRect.top >= -0.5 * innerHeight && sliderRect.top <= 0.5 * innerHeight) {
//       activeSlider = slider;
//       break;
//     }
//   }

//   sliders.forEach((slider) => slider.classList.remove('_active'));
//   if (activeSlider) {
//     activeSlider.classList.add('_active');
//   }

//   if (tags) {
//     tags.forEach((tag: Element) => {
//       if (activeSlider?.classList.contains(`${ className }__slider_${ modifier }`)) {
//         tag.classList.add('menu__tag_active');
//       } else {
//         tag.classList.remove('menu__tag_active');
//       }
//     });
//   }
// }, [ className, modifier ]);
