import styles from './style.scss';
import { LayoutContainerProps } from './types';

export function LayoutContainer({ children }: LayoutContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
