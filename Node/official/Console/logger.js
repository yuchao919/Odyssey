const fs = require('fs');
const Console = console.Console;
const output = fs.createWriteStream(`${__dirname}/stdout.log`);
const errorOutput = fs.createWriteStream(`${__dirname}/stderr.log`);
// custom simple logger
const logger = new Console(output, errorOutput);
// use it like console
const count = 6;
logger.log('count: %d', count);
logger.error(new Error('test error'));
// in stdout.log: count 5
