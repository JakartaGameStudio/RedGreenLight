import { Router } from 'express';
import { EmotionAPI } from 'server/controller/EmotionAPI';
import { authMiddleware } from 'server/middleware/authMiddleware';

export const emotionRoutes = (router: Router) => {
  const emotionRouter: Router = Router();

  emotionRouter.post('/', authMiddleware, EmotionAPI.createOrUpdate);

  router.use('/emotion', emotionRouter);
};
