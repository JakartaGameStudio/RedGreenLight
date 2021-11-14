import classNames from 'classnames';
import { Title } from 'components/Title/Title';
import { NavLink } from 'react-router-dom';
import { AppRoutes } from 'types/AppRoutes';

import styles from './Profile.module.scss';
import { ProfileProps } from './Profile.types';

export function Profile({ title, fields }: ProfileProps) {
  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <Title size="h2">{title}</Title>
      </div>
      <div className={styles.body}>
        {fields.map(({ label, value }) => {
          return (
            <dl className={styles.field} key={label}>
              <dt className={styles.fieldLabel}>{label}</dt>
              <dd>{value}</dd>
            </dl>
          );
        })}
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <NavLink className={styles.link} to={AppRoutes.profileEdit}>
            Изменить данные
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={styles.link} to={AppRoutes.profilePassword}>
            Изменить пароль
          </NavLink>
        </li>
        <li className={styles.navItem}>
          <NavLink className={classNames(styles.link, styles.signOut)} to={AppRoutes.signOut}>
            Выйти
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
