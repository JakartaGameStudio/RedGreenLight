const { app } = require('./build/server.js');
const port = process.env.PORT || 9001;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Application is started on localhost:', port);
});
