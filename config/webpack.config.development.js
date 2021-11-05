const { merge } = require('webpack-merge');

module.exports = merge({
  mode: 'development',
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  devServer: {
    hot: true,
    static: {
      publicPath: $.paths.server.base,
    },
  },
});
