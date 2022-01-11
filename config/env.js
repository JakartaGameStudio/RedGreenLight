const src = './src';
const build = './build';
const paths = {
  src,
  build,
  publicPath: '/',
  static: './static',
  html: './public/index.html',
};

module.exports = {
  isProd: process.env.NODE_ENV === 'production',
  paths,
};
