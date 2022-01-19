const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const paths = require('../paths');
const tasks = require('../tasks');
const env = require('../env');

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
    watch: !env.isProd,
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
    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  },
);
