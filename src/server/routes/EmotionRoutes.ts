import { Router } from 'express';
import { EmotionAPI } from 'server/controller/EmotionAPI';
import { authenticationMiddleware } from 'server/middleware/authenticationMiddleware';

export const emotionRoutes = (router: Router) => {
  const emotionRouter: Router = Router();

  emotionRouter.post('/', authenticationMiddleware, EmotionAPI.createOrUpdate);

  router.use('/emotion', emotionRouter);
};
