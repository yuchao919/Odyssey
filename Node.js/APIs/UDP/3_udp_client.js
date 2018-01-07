const dgram = require('dgram');
const fs = require('fs');

const buf1 = Buffer.from('Some ');
const buf2 = Buffer.from('bytes');
const client = dgram.createSocket('udp4');

/**
 * close
 */

// let data = fs.readFileSync(`${__dirname}/ccc.jpeg`); // 4.00 KB (4,096 字节)的JPEG
let data = fs.readFileSync(`${__dirname}/aaa.gif`); // 一个12.1MB的GIF

client.on('listening', () => {
  let sendBufferSize = client.getSendBufferSize();
  let len = data.length;
  console.log(len);
  client.setSendBufferSize(len + 1);

  const address = client.address();
  console.log(`client listening ${address.address}:${address.port}`);

  // https://www.cnblogs.com/findumars/p/5356095.html
  // 注意UDP包在Internet中最大不要超过548字节，否则IP层会分片，丢失分片导致所有UDP数据报无效，丢弃
  // 另外还不能超过65507字节
  // 用UDP协议发送时，用sendto函数最大能发送数据的长度为：65535- IP头(20) - UDP头(8)＝65507字节。用sendto函数发送数据时，如果发送数据长度大于该值，则函数会返回错误。  
  client.send(data, 23333, (err, info) => {
    if (err) {
      // 数据包过大的错误码:EMSGSIZE https://www.jianshu.com/p/0399d54be364
      debugger;
    }
    client.close();
  });
});

client.on('message', (msg, rinfo) => {
  console.log(`client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

client.on('close', err => {
  console.log(`client closed`);
});

client.on('error', err => {
  console.log(`client error:\n${err.stack}`);
  client.close();
});

client.bind(32222);
