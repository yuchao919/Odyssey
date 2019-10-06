const fs = require('fs');
const path = require('path');

const readable = process.stdin;
const writable = fs.createWriteStream(`${__dirname}/file.txt`);
// All the data from readable goes into 'file.txt'
readable.pipe(writable);
