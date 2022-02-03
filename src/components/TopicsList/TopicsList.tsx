import { Divider } from 'components/Divider/Divider';
import { ForumTopic } from 'components/ForumTopic/ForumTopic';
import React from 'react';
import { AppRoutes } from 'types/AppRoutes';

import styles from './TopicsList.module.scss';
import { TopicsListProps } from './TopicsList.types';

export function TopicsList({ items }: TopicsListProps) {
  return (
    <div className={styles.list}>
      {items.map((topic, index) => {
        return (
          <React.Fragment key={topic.id}>
            <ForumTopic
              title={topic.title}
              href={`${AppRoutes.forumTopic}/${topic.slug}`}
              date={new Date(topic.creationDate)}
              author={{
                name: topic.creator.name,
                avatar: topic.creator.avatar,
              }}
              count={topic.commentsCount}
            />
            {index < items.length - 1 && <Divider className={styles.divider} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}
