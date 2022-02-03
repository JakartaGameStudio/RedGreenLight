import classNames from 'classnames';
import { Avatar } from 'components/Avatar/Avatar';
import { Divider } from 'components/Divider/Divider';
import IconLike from 'images/icons/heart.svg?icon';
import IconDisLike from 'images/icons/thumb-down.svg?icon';
import { topicApi } from 'services/redux';

import styles from './Comment.module.scss';
import { CommentProps } from './Comment.types';

export function Comment({
  id,
  className,
  text,
  creationDate,
  creator,
  likesCount,
  dislikesCount,
  onReply,
  onLike,
  onDisLike,
}: CommentProps) {
  const date = new Date(creationDate);
  const { data } = topicApi.useGetCommentByIdQuery(id);

  return (
    <>
      <div className={classNames(styles.wrapper, className)}>
        <Avatar src={creator.avatar} className={styles.avatar} />
        <div className={styles.body}>
          <div className={styles.name}>{creator.name}</div>
          <div className={styles.date}>{date.toLocaleDateString()}</div>
          <div className={styles.text}>{text}</div>
          <div className={styles.actions}>
            <button className={styles.action} onClick={() => onLike(id)}>
              <IconLike className={styles.actionIcon} />
              <span className={styles.actionLabel}>{likesCount}</span>
            </button>
            <button className={styles.action} onClick={() => onDisLike(id)}>
              <IconDisLike className={styles.actionIcon} />
              <span className={styles.actionLabel}>{dislikesCount}</span>
            </button>
            <button className={styles.action} onClick={() => onReply(id)}>
              Ответить
            </button>
          </div>
        </div>
        <div className={styles.id}>{`#${id}`}</div>
      </div>
      {data?.replies ? (
        <div className={styles.replies}>
          {data.replies.map((reply) => (
            <Comment
              {...reply}
              className={styles.reply}
              key={reply.id}
              onDisLike={onDisLike}
              onLike={onLike}
              onReply={onReply}
            />
          ))}
        </div>
      ) : (
        <Divider className={styles.divider} />
      )}
    </>
  );
}
