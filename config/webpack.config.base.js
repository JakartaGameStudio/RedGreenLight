const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge(
  $.tasks.html,
  $.tasks.styles,
  $.tasks.images,
  $.tasks.scripts,
  $.tasks.static,
  {
    entry: path.resolve($.paths.entry),
    context: path.resolve($.paths.src),
    output: {
      path: path.resolve($.paths.build),
      filename: '[name].js',
    },
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.scss', '.css', '.json'],
      modules: ['node_modules', $.paths.src],
    },
    optimization: {
      chunkIds: 'named',
    },
  },
);
