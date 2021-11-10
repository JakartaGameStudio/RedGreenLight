import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';
import { MenuProps } from './Menu.types';

export function Menu({ items, className }: MenuProps) {
  return (
    <nav className={classNames(styles.menu, className)}>
      <ul>
        {items.map(({ url, text }, index) => (
          <li key={index}>
            <NavLink to={url} className={styles.item} children={text} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
