const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const env = require('../../env');

module.exports = {
  plugins: [
    new CopyPlugin({
      patterns: [{ from: path.resolve(env.paths.static), to: path.resolve(env.paths.build) }],
    }),
  ],
};
