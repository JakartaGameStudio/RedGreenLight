import classNames from 'classnames';
import Lottie from 'lottie-react';

import styles from './Preloader.module.scss';
import { PreloaderProps } from './Preloader.types';
import data from './PreloaderLottie.json';

export function Preloader({ className }: PreloaderProps) {
  return (
    <Lottie
      className={classNames(styles.preloader, className)}
      animationData={data}
      loop={true}
      autoPlay={true}
    />
  );
}
