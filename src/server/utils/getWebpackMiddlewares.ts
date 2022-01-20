import { RequestHandler } from 'express';
import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

export function getWebpackMiddlewares(config: webpack.Configuration): RequestHandler[] {
  const compiler = webpack({ ...config, mode: 'development' });

  return [
    // Middleware для HMR
    devMiddleware(compiler, {
      publicPath: '/',
      writeToDisk: true,
    }),
    hotMiddleware(compiler, { path: `/__webpack_hmr` }),
  ];
}
