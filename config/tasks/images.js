module.exports = {
  module: {
    rules: [
      {
        test: /\.(png)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
