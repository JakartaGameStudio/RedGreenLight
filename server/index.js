try {
  const { startServer } = require('../build/server.js');
  const port = process.env.PORT || 3000;

  startServer(port);
} catch (e) {
  console.info('Server waiting webpack build');
}
