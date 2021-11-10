import classNames from 'classnames';
import React from 'react';

import { TitleProps } from './Title.types';
import styles from './Title.module.scss';

export function Title({ size, children }: TitleProps) {
  return React.createElement(
    size,
    {
      className: classNames(styles.title, styles[size]),
    },
    children,
  );
}
