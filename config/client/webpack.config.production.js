const { merge } = require('webpack-merge');
const tasks = require('../tasks');

module.exports = merge(tasks.client.minify, {
  mode: 'production',
  devtool: false,
  entry: ['client'],
  optimization: {
    minimize: true,
  },
});
