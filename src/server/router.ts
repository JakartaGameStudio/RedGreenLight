import { Router } from 'express';

import { userRoutes } from './routes/UserRoutes';

export const router: Router = Router();

userRoutes(router);
