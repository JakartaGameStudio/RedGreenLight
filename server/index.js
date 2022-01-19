try {
  const { app } = require('../build/server.js');
  const port = process.env.PORT || 3000;

  app.listen(port, () => {
    console.info('Application is started on localhost:', port);
  });
} catch (e) {
  console.info('Server waiting webpack build');
}
