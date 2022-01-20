const { startServer } = require('./build/server.js');
const port = process.env.PORT || 9001;

startServer(port);
