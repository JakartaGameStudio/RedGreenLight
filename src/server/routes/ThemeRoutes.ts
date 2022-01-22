import { Router } from 'express';
import { ThemeAPI } from 'server/controller/ThemeAPI';
import { authMiddleware } from 'server/middleware/authMiddleware';

export const themeRoutes = (router: Router) => {
  const themeRouter: Router = Router();

  themeRouter.get('/', authMiddleware, ThemeAPI.findByUserId);
  themeRouter.put('/change', authMiddleware, ThemeAPI.update);

  router.use('/theme', themeRouter);
};
