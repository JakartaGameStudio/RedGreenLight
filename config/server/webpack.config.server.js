const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const paths = require('../paths');
const tasks = require('../tasks');

module.exports = merge(
  tasks.server.ignore,
  tasks.server.svgr,
  tasks.server.scripts,
  tasks.server.styles,
  {
    name: 'server',
    target: 'node',
    context: path.resolve(paths.src),
    node: { __dirname: false },
    entry: 'server',
    devtool: 'source-map',
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
    optimization: { nodeEnv: false },
  },
);
