import classNames from 'classnames';
import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { Menu } from 'components/Menu/Menu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { getAvatarUrl } from 'helpers/getAvatarUrl';
import Logo from 'images/logo.svg';
import { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { profileApi } from 'services/redux';
import { UserResponseKeys } from 'types/Api';
import { AppRoutes } from 'types/AppRoutes';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

export function Header({ className }: HeaderProps) {
  const { data } = profileApi.useGetProfileQuery();
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
          {data ? (
            <UserMenu
              className={styles.user}
              userName={data[UserResponseKeys.login]}
              image={{
                src: getAvatarUrl(data[UserResponseKeys.avatar]),
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
