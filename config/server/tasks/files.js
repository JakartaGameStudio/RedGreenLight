module.exports = {
  module: {
    rules: [
      {
        test: /^(?!.*\.inline).*\.(svg|jpe?g|png|gif|eot|woff2?|ttf)$/,
        loader: 'null-loader',
      },
    ],
  },
};
