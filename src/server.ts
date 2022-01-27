import 'babel-polyfill';

import bp from 'body-parser';
import cookieParser from 'cookie-parser';
import express, { Request, Response } from 'express';
import { readFileSync } from 'fs';
import https from 'https';
import path, { join } from 'path';
import { sequelize } from 'server/db/sequelize';
import { ssrWebpackMiddleware } from 'server/middleware/ssrWebpackMiddleware';
import { router } from 'server/router';
import { getAppHtml } from 'server/utils/getAppHtml';

import { isProd } from '../config/env';

(async function () {
  try {
    await sequelize.sync();
    console.info('Database is connected');
  } catch (error) {
    console.error('Database is not connected', error);
  }
})();

const app = express();

if (!isProd) {
  app.use(ssrWebpackMiddleware);
}

app.use(bp.json());
app.use(cookieParser());
app.use('/api', router);

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/*', (req: Request, res: Response) => {
  const html = getAppHtml(req);

  res.send(html);
});

const startServer = (port: number) => {
  const options = {
    cert: readFileSync(join(__dirname, 'cert.pem'), 'utf-8'),
    key: readFileSync(join(__dirname, 'key.pem'), 'utf-8'),
  };

  https.createServer(options, app).listen(port, () => {
    console.info('Application is started on localhost:', port);
  });
};

export { startServer };
