import { Router } from 'express';
import { EmotionAPI } from 'server/controller/EmotionAPI';

export const emotionRoutes = (router: Router) => {
  const emotionRouter: Router = Router();

  emotionRouter.post('/', EmotionAPI.createOrUpdate);

  router.use('/emotion', emotionRouter);
};
