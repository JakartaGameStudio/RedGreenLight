module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]__[local]_[hash:base64:3]',
                exportOnlyLocals: true,
              },
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
