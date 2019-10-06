const fs = require('fs');
const assert = require('assert');

const filePath = `${__dirname}/temp.txt`;

console.log(fs.readFileSync(filePath, 'utf8'));
// Prints: Node.js

// get the file descriptor of the file to be truncated
const fd = fs.openSync(filePath, 'r+');

// truncate the file to first four bytes
fs.ftruncate(fd, 4, err => {
  assert.ifError(err);
  console.log(fs.readFileSync(filePath, 'utf8'));
  // Prints: Node
});

// truncate the file to 10 bytes, whereas the actual size is 7 bytes
fs.ftruncate(fd, 10, err => {
  assert.ifError(err);
  console.log(fs.readFileSync(filePath));
});
// Prints: <Buffer 4e 6f 64 65 2e 6a 73 00 00 00>
// ('Node.js\0\0\0' in UTF8)
