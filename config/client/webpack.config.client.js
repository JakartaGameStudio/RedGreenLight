const { merge } = require('webpack-merge');
const path = require('path');
const configDev = require('./webpack.config.development');
const configProd = require('./webpack.config.production');
const env = require('../env');
const tasks = require('../tasks');
const configBase = merge(
  tasks.client.styles,
  tasks.client.images,
  tasks.client.scripts,
  tasks.client.static,
  {
    context: path.resolve(env.paths.src),
    output: {
      path: path.resolve(env.paths.build),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.scss', '.css', '.json'],
      modules: ['node_modules', env.paths.src, env.paths.static],
    },
    optimization: {
      chunkIds: 'named',
    },
  },
);

module.exports = merge(configBase, env.isProd ? configProd : configDev);
