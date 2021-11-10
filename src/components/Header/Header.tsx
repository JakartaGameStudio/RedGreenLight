import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { UserMenu } from 'components/UserMenu/UserMenu';
import Logo from 'images/logo.svg';
import { NavLink } from 'react-router-dom';
import { Routes } from 'types/Routes';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
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
      url: Routes.index,
    },
    {
      title: 'Форум',
      url: Routes.forum,
    },
    {
      title: 'Статистика',
      url: Routes.leaderBoards,
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
