const log4js = require('log4js');

log4js.configure({
  appenders: {
    everything: {
      type: 'file',
      filename: __dirname + '/all-the-logs.log',
      maxLogSize: 10485760,
      backups: 2,
      compress: true
    }
  },
  categories: {
    default: { appenders: ['everything'], level: 'debug' }
  }
});

const logger = log4js.getLogger();

var times = 0;
function loop() {
  setTimeout(() => {
    logger.debug(`hello world ${times++}`);
    loop();
    console.log(times);
  }, 100);
}
loop();
