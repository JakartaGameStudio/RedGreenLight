import classNames from 'classnames';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export function Button({ children, mods, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, {
        [styles.buttonLight]: mods === 'light',
        [styles.buttonWarning]: mods === 'warning',
      })}
    >
      {children}
    </button>
  );
}
