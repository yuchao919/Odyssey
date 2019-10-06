var log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});

var logger = log4js.getLogger();
const logger2 = log4js.getLogger('asdasd');
logger.level = 'debug'; // default level is OFF - which means no logs at all.
logger.debug('Some debug messages');
