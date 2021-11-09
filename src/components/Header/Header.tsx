import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { NavLink } from 'react-router-dom';
import { Routes } from 'types/Routes';

import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <LayoutContainer>{renderNav()}</LayoutContainer>
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
      title: 'Правила',
      url: Routes.about,
    },
    {
      title: 'Форум',
      url: Routes.forum,
    },
    {
      title: 'Результаты игры',
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
