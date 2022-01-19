import 'babel-polyfill';

import express, { RequestHandler } from 'express';
import path from 'path';
import { ssrRenderMiddleware } from 'ssr/ssrRenderMiddleware';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import clientConfig from '../config/client/webpack.config.client.js';
import { isProd } from '../config/env';

function getWebpackMiddlewares(config: webpack.Configuration): RequestHandler[] {
  const compiler = webpack(config);

  return [
    // Middleware для HMR
    devMiddleware(compiler, {
      publicPath: '/',
      writeToDisk: true,
    }),
    hotMiddleware(compiler, { path: `/__webpack_hmr` }),
  ];
}

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

if (!isProd) {
  app.use(getWebpackMiddlewares(clientConfig));
}

app.get('/*', ssrRenderMiddleware);

export { app };
