module.exports = {
  client: {
    scripts: require('./client/tasks/scripts'),
    styles: require('./client/tasks/styles'),
    images: require('./client/tasks/images'),
    html: require('./client/tasks/html'),
    static: require('./client/tasks/static'),
    minify: require('./client/tasks/minify'),
  },
  server: {
    scripts: require('./server/tasks/scripts'),
    styles: require('./server/tasks/styles'),
    files: require('./server/tasks/files'),
  },
};
