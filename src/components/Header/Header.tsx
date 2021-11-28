import { UserResponseKeys } from 'api/api.types';
import classNames from 'classnames';
import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { Menu } from 'components/Menu/Menu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getAvatarUrl } from 'helpers/getAvatarUrl';
import { useAuth } from 'hooks/useAuth';
import Logo from 'images/logo.svg';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

export function Header({ className }: HeaderProps) {
  const { user } = useAuth();
  const userName = useMemo(() => {
    return user ? user[UserResponseKeys.displayName] || user[UserResponseKeys.login] : '';
  }, [user]);
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
          {user ? (
            <UserMenu
              className={styles.user}
              userName={userName}
              image={{
                src: getAvatarUrl(user[UserResponseKeys.avatar]),
              }}
            />
          ) : (
            <NavLink to={AppRoutes.signIn} className={styles.signIn}>
              Войти
            </NavLink>
          )}
        </div>
      </LayoutContainer>
    </header>
  );
}
