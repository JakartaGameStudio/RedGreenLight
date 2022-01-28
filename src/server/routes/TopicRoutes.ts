import { Router } from 'express';
import { TopicAPI } from 'server/controller/TopicAPI';

export const topicRoutes = (router: Router) => {
  const topicRouter: Router = Router();

  topicRouter.get('/', TopicAPI.request);
  topicRouter.post('/', TopicAPI.create);
  topicRouter.get('/:slug', TopicAPI.findBySlug);

  router.use('/topic', topicRouter);
};
