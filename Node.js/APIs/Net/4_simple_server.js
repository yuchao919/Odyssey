const stream = require('stream');
const net = require('net');
const fs = require('fs');

const server = new net.Server();

/**
 * Sever events
 * 'close' 事件
 * 'connection' 事件
 * 'error' 事件
 * 'listening' 事件
 */

/**
 * listening
 * connection
 * close
 */

const bufArr = [];

const ServerEventNames = ['close', 'connection', 'error', 'listening'];

let no = 0;
let sno = 0;
server.on('listening', () => {
  console.log(`${no++}.Server.listening`);
});

server.on('connection', socket => {
  console.log(`${no++}.Server.connection`);

  /**
   * Socket events
   * Event: 'close'
   * Event: 'connect'
   * Event: 'data'
   * Event: 'drain'
   * Event: 'end'
   * Event: 'error'
   * Event: 'lookup'
   * Event: 'timeout'
   */

  /**
   * data
   * end
   * close
   */
  // const bufArr = new Uint8Array(12726241);

  let fw = fs.createWriteStream(`${__dirname}/bbb.gif`);

  socket.on('connect', err => {
    // 在这里没有监听到这个函数，说明该事件发生到监听之前
    console.log(`${sno++}.Socket.connect`);
  });

  socket.on('data', buf => {
    // console.log(`${sno++}.Socket.data`);
    fw.write(buf);
    // socket.pipe(fs.createWriteStream(`${__filename}/../bbb.gif`));
    // console.log(buf instanceof Buffer); // true
  });

  socket.on('drain', err => {
    // 没有监听到，没发生该事件吧
    console.log(`${sno++}.Socket.drain`);
  });

  socket.on('end', err => {
    // 客户端那边的socket调用destroy的时候触发这边的end事件
    console.log(`${sno++}.Socket.end`);
  });

  socket.on('close', err => {
    // 触发error事件会自动触发close
    console.log(`${sno++}.Socket.close`);
  });

  socket.on('error', err => {
    // 客户端的socket不正常关闭就会触发error事件
    console.log(`${sno++}.Socket.error`);
  });

  socket.on('lookup', err => {
    // 根据文档上来看，该事件发生在connecting之前，而且不适用于UNIX sockets
    console.log(`${sno++}.Socket.lookup`);
  });

  // socket.setTimeout(3000); // 设置超时ms
  // socket.on('timeout', err => {
  //   socket.setTimeout(0); // 取消超时设置
  //   // 设置了setTimeout，超过该时间没有触发data事件就会触发该事件
  //   // 但是不管有没有触发timeout事件，data事件依然可以被触发
  //   // 每次触发data事件后超时计时器重启，从而可以再次触发timeout事件
  //   console.log(`${sno++}.Socket.timeout`);
  // });
});

server.on('close', err => {
  console.log(`${no++}.close`);
});

server.on('error', err => {
  console.log(`${no++}.error`);
});

server.listen(
  {
    port: 23333,
    host: '192.168.1.100'
  },
  () => {
    console.log('begin listening');
  }
);
