import { createPortal } from 'react-dom';

import styles from './Popup.module.scss';
import { PopupProps } from './Popup.types';

export function Popup({ children, active, onClose }: PopupProps) {
  if (!active) {
    return null;
  }

  return createPortal(
    <div className={styles.popup}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.body}>{children}</div>
    </div>,
    document.body,
  );
}
