import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

import styles from './Profile.module.scss';

export function ProfileNav() {
  return (
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <NavLink className={styles.link} to={AppRoutes.profileEdit}>
          Изменить данные
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={styles.link} to={AppRoutes.profilePassword}>
          Изменить пароль
        </NavLink>
      </li>
      <li className={styles.navItem}>
        <NavLink className={classNames(styles.link, styles.signOut)} to={AppRoutes.signOut}>
          Выйти
        </NavLink>
      </li>
    </ul>
  );
}
