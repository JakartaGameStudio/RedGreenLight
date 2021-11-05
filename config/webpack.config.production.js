const { merge } = require('webpack-merge');

module.exports = merge($.tasks.minify, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
  },
});
