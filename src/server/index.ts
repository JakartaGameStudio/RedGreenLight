import 'babel-polyfill';

import bp from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import path from 'path';
import { getWebpackMiddlewares } from 'server/utils/getWebpackMiddlewares';
import { serverRenderMiddleware } from 'server/utils/serverRenderMiddleware';

import clientConfig from '../../config/client/webpack.config.client.js';
import { isProd } from '../../config/env';
import { sequelize } from './db/sequelize';
import { router } from './router';

(async function () {
  try {
    await sequelize.sync();
    // eslint-disable-next-line no-console
    console.log('Database is connected');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Database is not connected', error);
  }
})();

const app = express();

app.use(bp.json());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../build')));

if (!isProd) {
  app.use(getWebpackMiddlewares(clientConfig));
}

app.use('/api', router);
app.get('/*', serverRenderMiddleware);

const startServer = (port: number) => {
  // const httpsServer = https.createServer(
  //   {
  //     key: fs.readFileSync(join(__dirname, 'server.key'), 'utf-8'),
  //     cert: fs.readFileSync(join(__dirname, 'server.cert'), 'utf-8'),
  //   },
  //   app,
  // );

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log('Application is started on localhost:', port);
  });
};

export { startServer };
