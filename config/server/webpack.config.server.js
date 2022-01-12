const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const env = require('../env');
const tasks = require('../tasks');

module.exports = merge(tasks.server.files, tasks.server.scripts, tasks.server.styles, {
  name: 'server',
  target: 'node',
  context: path.resolve(env.paths.src),
  node: { __dirname: false },
  entry: 'server',
  devtool: 'source-map',
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    path: path.resolve(env.paths.build),
  },
  resolve: {
    modules: [env.paths.src, 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
  externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],
  optimization: { nodeEnv: false },
});
