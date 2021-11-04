const src = './src';
const build = './build';

module.exports = {
  src,
  build,
  server: {
    base: build,
  },
  html: `${src}/index.html`,
  entry: `${src}/index.tsx`,
};
