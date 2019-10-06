// var fs = require('fs');
// var data = '';

// // 创建可读流
// var readerStream = fs.createReadStream('input.txt');

// // 设置编码为utf8
// readerStream.setEncoding('UTF8');

// // 处理流事件 --> data, end, and error
// readerStream.on('data', function (chunk) {
//     data += chunk;
// });

// readerStream.on('end', function () {
//     console.log(data);
// });

// readerStream.on('error', function (err) {
//     console.log(err.stack);
// });

// var fs = require('fs');

// var readStream = fs.createReadStream('./input.txt');

// var writeStream = fs.createWriteStream('./output.txt');

// readStream.pipe(writeStream);

// console.log('程序执行完毕');

// var fs = require('fs');
// var zlib = require('zlib');

// // 压缩input.txt文件input.txt.gz
// fs.createReadStream('./input.txt')
//     .pipe(zlib.createGzip())
//     .pipe(fs.createWriteStream('./input.txt.gz'));

// console.log('文件压缩完成。');

// var fs = require('fs');
// var zlib = require('zlib');

// fs.createReadStream('./input.txt.gz')
//     .pipe(zlib.createGunzip())
//     .pipe(fs.createWriteStream('./output.txt'));

// console.log('文件解压完成');

