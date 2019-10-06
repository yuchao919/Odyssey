const assert = require('assert');
const encoding = require('encoding');

var resultBuffer = encoding.convert('abcdefg', 'utf-8');
var buf = Buffer.from('abcdefg');

console.log(assert.deepEqual(resultBuffer, buf));
