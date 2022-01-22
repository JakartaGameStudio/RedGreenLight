import { Router } from 'express';

import { themeRoutes } from './routes/ThemeRoutes';
import { userRoutes } from './routes/UserRoutes';

export const router: Router = Router();

userRoutes(router);
themeRoutes(router);
