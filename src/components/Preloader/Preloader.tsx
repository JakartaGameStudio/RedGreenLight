import Lottie from 'lottie-react';

import data from './Preloader.json';
import styles from './Preloader.module.scss';

export function Preloader() {
  return <Lottie className={styles.preloader} animationData={data} loop={true} autoPlay={true} />;
}
