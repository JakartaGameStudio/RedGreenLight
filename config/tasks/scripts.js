module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};
