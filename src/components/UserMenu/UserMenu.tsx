import UserIcon from 'images/icons/user.svg';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

import styles from './UserMenu.module.scss';

export function UserMenu() {
  return (
    <NavLink to={AppRoutes.profile} className={styles.wrapper}>
      <div className={styles.username}>Профиль</div>
      <div className={styles.icon}>
        <UserIcon width="1em" height="1em" />
      </div>
    </NavLink>
  );
}
