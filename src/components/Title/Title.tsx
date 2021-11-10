import classNames from 'classnames';
import React from 'react';

import styles from './Title.module.scss';
import { TitleProps } from './Title.types';

export function Title({ size, children, className }: TitleProps) {
  return React.createElement(
    size,
    {
      className: classNames(styles.title, className, styles[size]),
    },
    children,
  );
}
