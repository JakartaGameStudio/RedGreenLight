import { ForumComment } from 'types/Api';

type CommentCallback = (id: number) => void;

export type CommentProps = ForumComment & {
  className?: string;
  onDisLike?: CommentCallback;
  onLike?: CommentCallback;
  onReply?: CommentCallback;
};
