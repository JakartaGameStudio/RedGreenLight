import { Router } from 'express';
import { CommentAPI } from 'server/controller/CommentAPI';
import { authenticationMiddleware } from 'server/middleware/authenticationMiddleware';

export const commentRoutes = (router: Router) => {
  const commentRouter: Router = Router();

  commentRouter.get('/:id', authenticationMiddleware, CommentAPI.getReplies);
  commentRouter.post('/', authenticationMiddleware, CommentAPI.create);

  router.use('/comment', commentRouter);
};
