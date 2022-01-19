module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        issuer: /\.(js|ts)x?$/,
        oneOf: [
          {
            resourceQuery: /icon/,
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  icon: true,
                },
              },
            ],
          },
          {
            use: [
              {
                loader: '@svgr/webpack',
                options: {
                  icon: false,
                },
              },
            ],
          },
        ],
      },
    ],
  },
};
