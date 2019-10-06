const log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'console' } },
  categories: {
    default: { appenders: ['cheese'], level: 'trace' },
    cheese: { appenders: ['cheese'], level: 'warn' }
  }
});

const logger = log4js.getLogger();
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
