import { useState } from 'react';
import { createPortal } from 'react-dom';

import styles from './Popup.module.scss';
import { PopupProps } from './Popup.types';

//TODO: переделать на HOC c show/hide

export function Popup({ children, active }: PopupProps) {
  const [isActive, setActive] = useState(active);

  if (!isActive) {
    return null;
  }

  return createPortal(
    <div className={styles.popup}>
      <div className={styles.overlay} onClick={() => setActive(false)} />
      <div className={styles.body}>{children}</div>
    </div>,
    document.body,
  );
}
