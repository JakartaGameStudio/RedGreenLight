import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export function Button(props: ButtonProps) {
  const { href, mod, className } = props;
  const ButtonComponent = href ? Link : 'button';

  return (
    <ButtonComponent
      {...props}
      className={classNames(styles.button, props.className, {
        [styles[`button--${mod}`]]: mod,
      })}
      to={href}
    />
  );
}
