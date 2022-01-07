import classNames from 'classnames';

import styles from './Image.module.scss';
import { ImageProps } from './Image.types';

export function Image(props: ImageProps) {
  return <img {...props} className={classNames(styles.image, props.className)} />;
}
