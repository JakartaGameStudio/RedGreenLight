import { ForumComment } from 'types/Api';

export type CommentProps = ForumComment & {
  className?: string;
  onDisLike?(): void;
  onLike?(): void;
  onReply?(): void;
};
