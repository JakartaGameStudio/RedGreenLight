import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';
import { MenuProps } from './Menu.types';

export function Menu({ items, className }: MenuProps) {
  return (
    <nav className={className}>
      <ul className={styles.menuList}>
        {items.map(({ url, text }) => (
          <li key={url} className={styles.menuListItem}>
            <NavLink to={url} className={styles.item}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
