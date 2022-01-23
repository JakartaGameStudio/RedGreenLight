import { Router } from 'express';
import { TopicAPI } from 'server/controller/TopicAPI';
import { authMiddleware } from 'server/middleware/authMiddleware';

export const topicRoutes = (router: Router) => {
  const topicRouter: Router = Router();

  topicRouter.get('/', authMiddleware, TopicAPI.request);
  topicRouter.post('/', authMiddleware, TopicAPI.create);
  topicRouter.get('/:slug', authMiddleware, TopicAPI.findBySlug);

  router.use('/topic', topicRouter);
};
