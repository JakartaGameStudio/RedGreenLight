import { LayoutContainerProps } from 'components/LayoutContainer/types';
import React from 'react';

import styles from './style.scss';

export default function LayoutContainer({ children }: LayoutContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
