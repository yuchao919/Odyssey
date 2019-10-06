const http = require('http');

const log4js = require('log4js');

const app = require('./app');
const io = require('./io');

log4js.configure({
  appenders: { everything: { type: 'file', filename: 'logs/all.log' } },
  categories: { default: { appenders: ['everything'], level: 'debug' } },
  pm2: true
});

const logger = log4js.getLogger();

const server = http.createServer(app);
io(server);

var port = process.env.PORT || 3000;

server.listen(port, '127.0.0.1', () => {
  // console.log('Server listening at port %d', port);
  logger.debug('Server listening at port %d', port);
});
