import { Router } from 'express';

import { commentRoutes } from './routes/CommentRoutes';
import { emotionRoutes } from './routes/EmotionRoutes';
import { topicRoutes } from './routes/TopicRoutes';
import { userRoutes } from './routes/UserRoutes';

export const router: Router = Router();

userRoutes(router);
commentRoutes(router);
topicRoutes(router);
emotionRoutes(router);
