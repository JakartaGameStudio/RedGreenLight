import { Image } from 'components/Image/Image';
import { Title } from 'components/Title/Title';
import UserIcon from 'images/icons/user.svg?icon';
import { NavLink } from 'react-router-dom';

import styles from './ForumTopic.module.scss';
import { ForumTopicProps } from './ForumTopic.types';

export function ForumTopic({ title, date, href, author }: ForumTopicProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <NavLink to={href} className={styles.authorImage}>
          {author.image ? (
            <Image {...author.image} className={styles.authorImg} />
          ) : (
            <UserIcon className={styles.authorIcon} />
          )}
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
    </div>
  );
}
