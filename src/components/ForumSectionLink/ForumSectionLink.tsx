import { Link } from 'react-router-dom';
import { ForumSection } from 'types/ForumSection.types';

import styles from './ForumSectionLink.module.scss';

export function ForumSectionLink({ messagesCount, name, slug, themesCount }: ForumSection) {
  return (
    <Link to={`/forum/${slug}`}>
      <div className={styles.forumSection}>
        <span className={`${styles.forumSection__name}`}>{name}</span>
        <div className={`${styles.forumSection__meta}`}>
          <span className={`${styles.forumSection__themesCount}`}>Темы: {themesCount}</span>
          <span className={`${styles.forumSection__messagesCount}`}>
            Сообщения: {messagesCount}
          </span>
        </div>
      </div>
    </Link>
  );
}
