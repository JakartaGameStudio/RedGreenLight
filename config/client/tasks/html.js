const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const env = require('../../env');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(env.paths.html),
      inject: true,
      publicPath: '/',
    }),
  ],
};
