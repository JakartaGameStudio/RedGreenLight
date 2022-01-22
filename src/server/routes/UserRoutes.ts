import { Router } from 'express';
import { UserAPI } from 'server/controller/UserAPI';
import { authMiddleware } from 'server/middleware/authMiddleware';

export const userRoutes = (router: Router) => {
  const userRouter: Router = Router();

  userRouter.get('/logout', authMiddleware, UserAPI.logout);
  userRouter.post('/login', UserAPI.login);

  router.use('/user', userRouter);
};
