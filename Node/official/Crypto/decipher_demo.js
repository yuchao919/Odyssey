const crypto = require('crypto');
const fs = require('fs');
const decipher = crypto.createDecipher('aes192', 'a password');

const input = fs.createReadStream(`${__dirname}/test.enc`);
const output = fs.createWriteStream(`${__dirname}/test.txt`);

input.pipe(decipher).pipe(output);
