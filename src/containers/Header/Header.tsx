import classNames from 'classnames';
import { Image } from 'components/Image/Image';
import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { Menu } from 'components/Menu/Menu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useIdentify } from 'hooks/useIdentify';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { UserResponseKeys } from 'types/Api';
import { AppRoutes } from 'types/AppRoutes';
import { getAvatarUrl } from 'utils/getAvatarUrl';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

export function Header({ className }: HeaderProps) {
  const [userData] = useIdentify();
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
            <Image src="/images/logo.svg" className={styles.logoIcon} />
          </NavLink>
          <Menu className={styles.nav} items={menuItems} />
          {userData ? (
            <UserMenu
              className={styles.user}
              userName={userData[UserResponseKeys.login]}
              image={{
                src: getAvatarUrl(userData[UserResponseKeys.avatar]),
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
