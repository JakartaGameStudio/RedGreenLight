import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import clientConfig from '../../../config/client/webpack.config.client.js';
const compiler = webpack(clientConfig);

export const ssrWebpackMiddleware = [
  // Middleware для HMR
  devMiddleware(compiler, {
    publicPath: '/',
    writeToDisk: true,
    serverSideRender: true,
  }),
  hotMiddleware(compiler),
];
