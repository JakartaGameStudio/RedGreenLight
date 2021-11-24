module.exports = {
  module: {
    rules: [
      {
        test: /\.(png)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        use: '@svgr/webpack',
      },
    ],
  },
};
