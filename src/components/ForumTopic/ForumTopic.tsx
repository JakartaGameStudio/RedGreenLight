import { Avatar } from 'components/Avatar/Avatar';
import { Title } from 'components/Title/Title';
import { NavLink } from 'react-router-dom';

import styles from './ForumTopic.module.scss';
import { ForumTopicProps } from './ForumTopic.types';

export function ForumTopic({ title, date, href, author, count }: ForumTopicProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <NavLink to={href}>
          <Avatar src={author.avatar} className={styles.authorImage} />
        </NavLink>
      </div>
      <div className={styles.body}>
        <NavLink to={href}>
          <Title size="h4" className={styles.title}>
            {title}
          </Title>
        </NavLink>
        <dl className={styles.info}>
          <dt className={styles.infoName}>Дата:</dt>
          <dd className={styles.infoValue}>{date.toLocaleDateString()}</dd>
        </dl>
        <dl className={styles.info}>
          <dt className={styles.infoName}>Автор:</dt>
          <dd className={styles.infoValue}>{author.name}</dd>
        </dl>
      </div>
      <div className={styles.count}>{count}</div>
    </div>
  );
}
