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
    const documentClickHandler = () => setActive(false);
    document.addEventListener('click', documentClickHandler);

    return function () {
      document.removeEventListener('click', documentClickHandler);
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
      {isActive && renderDropdown()}
    </div>
  );
}

function renderDropdown() {
  return (
    <nav className={styles.dropdown}>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <NavLink className={styles.item} to={AppRoutes.profileEdit}>
            Изменить даные
          </NavLink>
        </li>
        <li className={styles.menuItem}>
          <NavLink className={classNames(styles.item, styles.itemWarning)} to={AppRoutes.signOut}>
            Выйти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
