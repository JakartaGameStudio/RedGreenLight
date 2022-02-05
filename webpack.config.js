const client = require('./config/client/webpack.config.client');
const server = require('./config/server/webpack.config.server');
console.log('ENV VARS:', process.env);
module.exports = [client, server];
