const src = './src';
const build = './build';

module.exports = {
  src,
  build,
  static: './static',
  server: {
    base: build,
  },
  html: `./public/index.html`,
  entry: `${src}/index.tsx`,
};
