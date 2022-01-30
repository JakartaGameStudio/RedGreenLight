import styles from './Comment.module.scss';
import { CommentProps } from './Comment.types';

export function Comment({}: CommentProps) {
  return <div className={styles.wrapper}></div>;
}
