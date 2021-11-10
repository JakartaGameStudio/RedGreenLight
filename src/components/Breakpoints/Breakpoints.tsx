import { BreakpointsProps } from './Breakpoints.types';
import { useBreakpoints } from './useBreakpoints';

export function Breakpoints({ points, children }: BreakpointsProps) {
  const [current] = useBreakpoints();
  const active = [].concat(points).some((point) => current.includes(point));

  if (!active) {
    return null;
  }

  return <>{children}</>;
}
