import { Router } from 'express';
import { UserAPI } from 'server/controller/UserAPI';
import { authenticationMiddleware } from 'server/middleware/authenticationMiddleware';

export const userRoutes = (router: Router) => {
  const userRouter: Router = Router();

  userRouter.get('/', authenticationMiddleware, UserAPI.get);
  userRouter.put('/changeThemeId', authenticationMiddleware, UserAPI.changeTheme);
  router.use('/user', userRouter);
};
