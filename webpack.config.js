const { merge } = require('webpack-merge');
const ARGV = require('yargs').argv;

global.$ = {
    isProd: ARGV.mode === 'production',
    paths: require('./config/paths'),
    tasks: {
        scripts: require('./config/tasks/scripts'),
        styles: require('./config/tasks/styles'),
        images: require('./config/tasks/images'),
        minify: require('./config/tasks/minify'),
        html: require('./config/tasks/html'),
    },
};

const config = {
    base: require('./config/webpack.config.base'),
    prod: require('./config/webpack.config.production'),
    dev: require('./config/webpack.config.development'),
};

module.exports = merge(config.base, $.isProd ? config.prod : config.dev);
