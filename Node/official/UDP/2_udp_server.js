const dgram = require('dgram');
const fs = require('fs');

const server = dgram.createSocket('udp4');

server.on('listening', () => {
  // 调用bind的时候触发该事件
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

let fw = fs.createWriteStream(`${__dirname}/zzz.jpeg`);

server.on('message', (msg, rinfo) => {
  fw.write(msg);
  // 客户端调用send的时候触发该事件
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('close', err => {
  console.log(`server closed`);
});

server.on('error', err => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});



server.bind(23333);
