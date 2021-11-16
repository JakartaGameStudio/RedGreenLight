import { ReactNode } from 'react';

import styles from './MainList.module.scss';

export function MainList({ children }: { children: Array<ReactNode> }) {
  return (
    <div className={styles.container}>
      <div className={styles.mainList}>{children}</div>
    </div>
  );
}
