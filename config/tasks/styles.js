module.exports = {
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]__[local]--[hash:base64:5]',
              },
              importLoaders: 2,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
