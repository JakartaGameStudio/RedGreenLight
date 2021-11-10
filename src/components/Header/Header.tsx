import classNames from 'classnames';
import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Logo from 'images/logo.svg';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

export function Header({ className }: HeaderProps) {
  return (
    <header className={classNames(styles.header, className)}>
      <LayoutContainer>
        <div className={styles.inner}>
          <Logo className={styles.logo} />
          {renderNav()}
          <UserMenu />
        </div>
      </LayoutContainer>
    </header>
  );
}

function renderNav() {
  const items = [
    {
      title: 'Об игре',
      url: AppRoutes.index,
    },
    {
      title: 'Форум',
      url: AppRoutes.forum,
    },
    {
      title: 'Статистика',
      url: AppRoutes.leaderBoards,
    },
  ];

  return (
    <nav className={styles.nav}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <NavLink to={item.url} className={styles.navItem}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
