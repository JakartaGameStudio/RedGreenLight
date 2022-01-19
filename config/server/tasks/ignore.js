module.exports = {
  module: {
    rules: [
      {
        test: /^(?!.*\.inline).*\.(jpe?g|png|gif|eot|woff2?|ttf)$/,
        loader: 'null-loader',
      },
    ],
  },
};
