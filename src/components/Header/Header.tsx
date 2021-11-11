import classNames from 'classnames';
import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { Menu } from 'components/Menu/Menu';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Logo from 'images/logo.svg';
import { AppRoutes } from 'types/AppRoutes';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

export function Header({ className }: HeaderProps) {
  return (
    <header className={classNames(styles.header, className)}>
      <LayoutContainer>
        <div className={styles.inner}>
          <Logo className={styles.logo} />
          <Menu
            className={styles.nav}
            items={[
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
            ]}
          />
          <UserMenu className={styles.user} userName="Очень длинный username" />
        </div>
      </LayoutContainer>
    </header>
  );
}
