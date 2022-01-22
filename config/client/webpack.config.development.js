const { merge } = require('webpack-merge');
const webpack = require('webpack');

module.exports = merge({
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    'css-hot-loader/hotModuleReplacement',
    'client',
  ],
  optimization: {
    minimize: false,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
