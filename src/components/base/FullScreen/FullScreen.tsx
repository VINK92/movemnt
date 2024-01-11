import { FC, ReactNode } from 'react';
import clsx from 'clsx';

interface FullScreenProps {
  className: string;
  modifier?: string;
  children?: ReactNode;
  background?: ReactNode;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

const FullScreen: FC<FullScreenProps> = ({
  className, modifier, children, background, onMouseOver,
  onMouseOut,

}) => (
  <div
    className={ clsx(`${ className }__full-screen`, modifier, 'full-screen') }
    { ...(onMouseOver && { onMouseOver }) }
    { ...(onMouseOut && { onMouseOut }) }
  >
    <div className="full-screen__body">{children}</div>
    {background}
  </div>
);

export default FullScreen;
