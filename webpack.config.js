const { merge } = require('webpack-merge');

global.$ = {
  isProd: process.env.mode === 'production',
  paths: require('./config/paths'),
  tasks: {
    scripts: require('./config/tasks/scripts'),
    styles: require('./config/tasks/styles'),
    images: require('./config/tasks/images'),
    minify: require('./config/tasks/minify'),
    html: require('./config/tasks/html'),
    static: require('./config/tasks/static'),
  },
};

const config = {
  base: require('./config/webpack.config.base'),
  prod: require('./config/webpack.config.production'),
  dev: require('./config/webpack.config.development'),
};

module.exports = merge(config.base, $.isProd ? config.prod : config.dev);
