var fs = require('fs');

var rs = fs.createReadStream('text.md');
/*var rs = fs.createReadStream('text.md', {
    highWaterMark: 11
});*/

var data = '';
rs.on('data', function (chunk) {
    data += chunk;
});
rs.on('end', function () {
    console.log(data);
});