const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const paths = require('../../paths');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(paths.static), to: path.resolve(paths.build) }],
    }),
  ],
};
