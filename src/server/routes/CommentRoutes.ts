import { Router } from 'express';
import { CommentAPI } from 'server/controller/CommentAPI';

export const commentRoutes = (router: Router) => {
  const commentRouter: Router = Router();

  commentRouter.get('/:id', CommentAPI.getReplies);
  commentRouter.post('/', CommentAPI.create);

  router.use('/comment', commentRouter);
};
