module.exports = {
  client: {
    scripts: require('./client/tasks/scripts'),
    styles: require('./client/tasks/styles'),
    images: require('./client/tasks/images'),
    static: require('./client/tasks/static'),
    minify: require('./client/tasks/minify'),
  },
  server: {
    scripts: require('./server/tasks/scripts'),
    styles: require('./server/tasks/styles'),
    ignore: require('./server/tasks/ignore'),
    svgr: require('./server/tasks/svgr'),
  },
};
