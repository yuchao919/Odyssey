const log4js = require('log4js');

log4js.configure({
  appenders: {
    out: {
      type: 'stdout',
      layout: {
        type: 'pattern',
        pattern: '%d %p %c %x{user} %m%n',
        tokens: {
          user: function(logEvent) {
            return 'lucy';
          }
        }
      }
    }
  },
  categories: { default: { appenders: ['out'], level: 'info' } }
});

const logger = log4js.getLogger();
logger.info('doing something.');
