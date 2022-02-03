import classNames from 'classnames';

import styles from './Divider.module.scss';
import { DividerProps } from './Divider.types';

export function Divider({ className }: DividerProps) {
  return <hr className={classNames(styles.divider, className)} />;
}
