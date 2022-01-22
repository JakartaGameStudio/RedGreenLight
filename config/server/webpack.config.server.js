const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const paths = require('../paths');
const tasks = require('../tasks');
const env = require('../env');
const webpack = require('webpack');
const { resolve, join } = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(
  tasks.server.ignore,
  tasks.server.svgr,
  tasks.server.scripts,
  tasks.server.styles,
  {
    name: 'server',
    entry: 'server',
    target: 'node',
    mode: env.isProd ? 'production' : 'development',
    //watch: !env.isProd,
    optimization: {
      minimize: env.isProd,
    },
    context: path.resolve(paths.src),
    node: { __dirname: false },
    output: {
      filename: 'server.js',
      libraryTarget: 'commonjs2',
      path: path.resolve(paths.build),
    },
    resolve: {
      modules: [paths.src, paths.static, 'node_modules'],
      extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    plugins: [
      new webpack.ProvidePlugin({
        localStorage: resolve(join(__dirname, '../mock/localStorage.mock')),
        document: resolve(join(__dirname, '../mock/document.mock')),
      }),
      new Dotenv(),
    ],
    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  },
);
