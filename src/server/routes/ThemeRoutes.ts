import { Router } from 'express';
import { ThemeAPI } from 'server/controller/ThemeAPI';
import { authorization } from 'server/utils/authorization';

export const themeRoutes = (router: Router) => {
  const themeRouter: Router = Router();

  themeRouter.get('/', authorization, ThemeAPI.findByUserId);
  themeRouter.put('/change', authorization, ThemeAPI.update);

  router.use('/theme', themeRouter);
};
