import { Router } from 'express';
import { CommentAPI } from 'server/controller/CommentAPI';
import { authMiddleware } from 'server/middleware/authMiddleware';

export const commentRoutes = (router: Router) => {
  const commentRouter: Router = Router();

  commentRouter.get('/:id', authMiddleware, CommentAPI.getReplies);
  commentRouter.post('/', authMiddleware, CommentAPI.create);

  router.use('/comment', commentRouter);
};
