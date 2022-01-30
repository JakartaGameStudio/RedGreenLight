import { Preloader } from 'components/Preloader/Preloader';
import { commentApi } from 'services/redux/api/commentApi';

import { CommentsListProps } from './CommentsList.types';

export function CommentsList({ id }: CommentsListProps) {
  const { data, isError, isLoading } = commentApi.useGetCommentsByIdQuery(id);

  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return <div>Произошла ошибка при загрузке сообщений</div>;
  }

  return <div>{JSON.stringify(data, null, 4)}</div>;
}
