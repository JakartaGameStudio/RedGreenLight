import { Router } from 'express';
import { UserAPI } from 'server/controller/UserAPI';
import { authorization } from 'server/utils/authorization';

export const userRoutes = (router: Router) => {
  const userRouter: Router = Router();

  userRouter.get('/logout', authorization, UserAPI.logout);
  userRouter.post('/login', UserAPI.login);

  router.use('/user', userRouter);
};
