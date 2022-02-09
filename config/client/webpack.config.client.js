const { merge } = require('webpack-merge');
const path = require('path');
const configDev = require('./webpack.config.development');
const configProd = require('./webpack.config.production');
const env = require('../env');
const paths = require('../paths');
const tasks = require('../tasks');
const configBase = merge(
  tasks.client.styles,
  tasks.client.images,
  tasks.client.scripts,
  tasks.client.static,
  {
    context: path.resolve(paths.src),
    target: 'web',
    output: {
      path: path.resolve(paths.build),
      filename: '[name].js',
      publicPath: '/',
    },
    resolve: {
      alias: { 'react-dom': '@hot-loader/react-dom' },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.scss', '.css', '.json'],
      modules: ['node_modules', paths.src, paths.static],
    },
  },
);

module.exports = merge(configBase, env.isProd ? configProd : configDev);
