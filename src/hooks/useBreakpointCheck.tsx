import { useCallback, useState } from 'react';

import useWindowListener from './useWindowListener';

interface IUseBreakpointCheck {
  (breakpoint: number): boolean;
}

const useBreakpointCheck: IUseBreakpointCheck = (breakpoint) => {
  const [ isBreakpoint, setIsBreakpoint ] = useState(false);

  const handleBreakpointChange = useCallback(() => {
    const { innerWidth } = window;
    setIsBreakpoint(innerWidth < breakpoint);
  }, [ breakpoint ]);
  useWindowListener('resize', handleBreakpointChange);

  return isBreakpoint;
};

export default useBreakpointCheck;
