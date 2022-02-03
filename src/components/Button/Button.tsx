import classNames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

export function Button(props: ButtonProps) {
  const { href, mods, className } = props;
  const ButtonComponent = href ? Link : 'button';

  return (
    <ButtonComponent
      {...props}
      to={href}
      className={classNames(
        styles.button,
        className,
        mods?.map((mod) => styles[`button--${mod}`]),
      )}
    />
  );
}
