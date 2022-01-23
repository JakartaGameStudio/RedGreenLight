import { Router } from 'express';

import { commentRoutes } from './routes/CommentRoutes';
import { themeRoutes } from './routes/ThemeRoutes';
import { topicRoutes } from './routes/TopicRoutes';
import { userRoutes } from './routes/UserRoutes';

export const router: Router = Router();

userRoutes(router);
themeRoutes(router);
commentRoutes(router);
topicRoutes(router);
