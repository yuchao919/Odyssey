const fs = require('fs');
const stream = require('stream');

// let pngStream = fs.createReadStream(__dirname + '/letter.png');

// let t = 0;
// console.log(pngStream.read());
// pngStream.on('data', chunk => {
//   console.log(t++);
//   console.log(chunk);
// });
const pngPath = __dirname + '/letter.png';
const txtPath = __dirname + '/img.txt';

/* 
fs.readFile(pngPath, (err, buf) => {
  console.log(buf[0]);
  let base64Str = buf.toString('base64');
  let utf8Str = buf.toString('utf8');
  console.log(base64Str[0]);
  console.log(utf8Str[0]);
  // console.log(data); // 会卡死
  // fs.writeFile(__dirname + '/outputImg.png', buf, {encoding: 'base64'}, err => {
  //   console.log('finished');
  // });
  // fs.writeFile(__dirname + '/outputImg.txt', buf.toString('base64'), err => {
  //   console.log('finished');
  // });
});
 */

/* 
fs.readFile(txtPath, (err, buf) => {
  // console.log(Buffer.from(buf.toString(), 'base64')[0]);
  // 该png用base64的编码 转义为 utf8字符串 存储在文件中，
  // 读取utf8字符串的buffer， toString生成utf8字符串， Buffer.from转义成base64的buffer
  // 把base64的buffer writeFile到文件中

  // fs.writeFile(
  //   __dirname + '/outputImg.png',
  //   Buffer.from(buf.toString(), 'base64'),
  //   {encoding: 'base64'},
  //   err => {
  //     console.log('finished');
  //   }
  // );
});
 */

(function(params) {
  const bufArr = [];
  const inStream = fs.createReadStream(txtPath);
  const outStream = fs.createWriteStream(__dirname + '/outputImg.png');
  inStream.on('data', chunk => {
    outStream.write(chunk.toString(), 'base64');
  });
  inStream.on('end', () => {
    console.log('finished');
  });
})();

/* 
// 转义
(function(params) {
  fs.readFile(txtPath, (err, buf) => {
    fs
      .createWriteStream(__dirname + '/outputImg.png')
      .write(buf.toString(), 'base64', err => {
        console.log('finished');
      });
    // console.log(Buffer.from(buf.toString(), 'base64'));
  });
})();
 */

/* 
 // 用第三方转义
(function(params) {
  let encoding;
  try {
    encoding = require('encoding');
  } catch (err) {
    console.log('need npm i encoding');
  }

  fs.readFile(txtPath, (err, buf) => {
    let base64Buf = encoding.convert(buf, 'base64');
    fs.createWriteStream(__dirname + '/outputImg.png').write(base64Buf, err => {
      console.log('finished');
    });
    // console.log(Buffer.from(buf.toString(), 'base64'));
  });
})();
 */
