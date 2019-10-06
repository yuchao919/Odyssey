const zlib = require('zlib');

const gzip = zlib.createGzip();
const fs = require('fs');
// const inp = fs.createReadStream(process.stdin);
const inp = fs.createReadStream(__dirname + '/input.txt');
const out = fs.createWriteStream(__dirname + '/input.txt.gz');

inp.pipe(gzip).pipe(out);

/**
 * process.stdin 直接node demo1.js，调试模式无用
 */
