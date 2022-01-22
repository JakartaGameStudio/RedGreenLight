import { NavLink } from 'react-router-dom';

import styles from './ForumTopic.module.scss';
import { ForumTopicProps } from './ForumTopic.types';

export function ForumTopic({ title, date, count, href, image }: ForumTopicProps) {
  return (
    <div className={styles.topic}>
      <NavLink to={href}>
        <div className={styles.image}></div>
      </NavLink>
    </div>
  );
}
