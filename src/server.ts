import 'babel-polyfill';

import cookieParser from 'cookie-parser';
import express, { Request, Response } from 'express';
import path from 'path';
import { getAppHtml } from 'ssr/getAppHtml';
import { ssrWebpackMiddleware } from 'ssr/middleware/ssrWebpackMiddleware';

import { isProd } from '../config/env';

const app = express();

if (!isProd) {
  app.use(ssrWebpackMiddleware);
}

app.use(cookieParser());
app.get('/*', async (req: Request, res: Response) => {
  const html = getAppHtml(req);

  res.send(html);
});

app.use(express.static(path.resolve(__dirname, '../build')));

export { app };
