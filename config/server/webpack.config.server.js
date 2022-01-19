const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const paths = require('../paths');
const tasks = require('../tasks');
const env = require('../env');
const configDev = require('./webpack.config.development');
const configProd = require('./webpack.config.production');
const configBase = merge(
  tasks.server.ignore,
  tasks.server.svgr,
  tasks.server.scripts,
  tasks.server.styles,
  {
    name: 'server',
    entry: 'server',
    target: 'node',
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
      plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  },
);

module.exports = merge(configBase, env.isProd ? configProd : configDev);
