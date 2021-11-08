import styles from './LayoutContainer.module.scss';
import { LayoutContainerProps } from './types';

export function LayoutContainer({ children }: LayoutContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
