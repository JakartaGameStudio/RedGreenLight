const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('../paths');
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.html),
      inject: true,
    }),
  ],
};
