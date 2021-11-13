import classNames from 'classnames';

import styles from './Title.module.scss';
import { TitleProps } from './Title.types';

export function Title({ size, children, className }: TitleProps) {
  const TagName = size;

  return (
    <TagName children={children} className={classNames(styles.title, className, styles[size])} />
  );
}
