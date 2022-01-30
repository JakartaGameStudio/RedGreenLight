import { Router } from 'express';
import { TopicAPI } from 'server/controller/TopicAPI';
import { authenticationMiddleware } from 'server/middleware/authenticationMiddleware';

export const topicRoutes = (router: Router) => {
  const topicRouter: Router = Router();

  topicRouter.get('/', authenticationMiddleware, TopicAPI.request);
  topicRouter.post('/', authenticationMiddleware, TopicAPI.create);
  topicRouter.get('/:slug', authenticationMiddleware, TopicAPI.findBySlug);

  router.use('/topic', topicRouter);
};
