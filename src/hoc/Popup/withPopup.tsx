import React from 'react';
import { createPortal } from 'react-dom';

import styles from './Popup.module.scss';
import { PopupProps } from './Popup.types';

export function withPopup<P>(Component) {
  return class WithPopup extends React.PureComponent<PopupProps & P> {
    render() {
      if (!this.props.active) {
        return null;
      }

      return createPortal(
        <div className={styles.popup}>
          <div className={styles.overlay} onClick={this.props.onClose} />
          <div className={styles.body}>
            <Component {...this.props} />
          </div>
        </div>,
        document.body,
      );
    }
  };
}
