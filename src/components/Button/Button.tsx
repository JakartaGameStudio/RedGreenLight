import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export function Button({ className, children, href, mod, onClick, type }: ButtonProps) {
  const classes = classNames(styles.button, className, styles[`button--${mod}`]);

  if (href) {
    return <Link to={href} children={children} onClick={onClick} className={classes} />;
  }

  return (
    <button onClick={onClick} className={classes} type={type}>
      {children}
    </button>
  );
}
