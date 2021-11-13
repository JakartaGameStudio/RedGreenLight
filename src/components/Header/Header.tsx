import classNames from 'classnames';
import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { Menu } from 'components/Menu/Menu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Logo from 'images/logo.svg';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

export function Header({ className }: HeaderProps) {
  const menuItems = useMemo(
    () => [
      {
        text: 'Об игре',
        url: AppRoutes.index,
      },
      {
        text: 'Форум',
        url: AppRoutes.forum,
      },
      {
        text: 'Статистика',
        url: AppRoutes.leaderBoards,
      },
    ],
    [],
  );

  return (
    <header className={classNames(styles.header, className)}>
      <LayoutContainer>
        <div className={styles.inner}>
          <NavLink className={styles.logo} to={AppRoutes.index}>
            <Logo className={styles.logoIcon} />
          </NavLink>
          <Menu className={styles.nav} items={menuItems} />
          <UserMenu className={styles.user} userName="Очень длинный username" />
        </div>
      </LayoutContainer>
    </header>
  );
}
