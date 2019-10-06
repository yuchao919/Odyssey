const fs = require('fs');

fs.symlink(`${__dirname}/temp.txt`, `${__dirname}/tmp.txt`, err => {
  debugger;
  console.log(arguments.length);
});
