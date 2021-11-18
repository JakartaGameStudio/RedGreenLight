import classNames from 'classnames';
import UserIcon from 'images/icons/user.svg';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

import styles from './UserMenu.module.scss';
import { UserMenuProps } from './UserMenu.types';

export function UserMenu({ userName, className }: UserMenuProps) {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const closeMenu = () => setActive(false);

    document.addEventListener('click', closeMenu);

    return function () {
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  function onClick(event) {
    event.stopPropagation();
    setActive(!isActive);
  }

  return (
    <div className={classNames(styles.wrapper, className)} onClick={onClick}>
      <div className={styles.head} title={userName}>
        <div className={styles.username}>{userName}</div>
        <div className={styles.icon}>
          <UserIcon width="1em" height="1em" />
        </div>
      </div>
      {isActive && (
        <nav className={styles.dropdown}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>
              <NavLink className={styles.item} to={AppRoutes.profile}>
                Перейти в профиль
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink className={styles.item} to={AppRoutes.profileEdit}>
                Изменить данные
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink className={styles.item} to={AppRoutes.profilePassword}>
                Изменить пароль
              </NavLink>
            </li>
            <li className={styles.menuItem}>
              <NavLink
                className={classNames(styles.item, styles.itemWarning)}
                to={AppRoutes.signOut}
              >
                Выйти
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
