const net = require('net');
const fs = require('fs');
const stream = require('stream');
const socket = new net.Socket();

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
 * 0.Socket.lookup
 * 1.Socket.connect
 * 2.Socket.drain
 */

/**
 * Socket methods
 * address
 * connect
 * destroy
 * end
 * pause
 * ref
 * resume
 * setEncoding
 * setKeepAlive
 * setNoDelay
 * setTimeout
 * unref
 * write
 */

/**
 * Socket attributes
 * bufferSize
 * bytesRead
 * bytesWritten
 * connecting
 * destroyed
 * localAddress
 * localPort
 * remoteAddress
 * remoteFamily
 */

socket.setEncoding('utf8');

let sno = 0;

socket.on('connect', err => {
  // 调用connect方法触发该事件
  console.log(`${sno++}.Socket.connect`);

  let data = fs.readFileSync(`${__dirname}/aaa.gif`);
  console.log(socket instanceof stream.Duplex);
  // console.log(data.length); // 12726241字节
  socket.write(data, () => {
    console.log('write done');
  });

  // 发送一个gif给服务端

  // socket.write('hello', 'utf8', () => {
  //   console.log('write callback');

  //   // console.log('begin end');
  //   // socket.end();

  //   console.log('begin destroy');
  //   socket.destroy();
  // });
});

socket.on('data', buf => {
  console.log(`${sno++}.Socket.data`);
});

socket.on('drain', err => {
  // write 'hello'的时候没有监听到，没触发该事件吧
  // write一个12.1MB的gif的时候触发了该事件
  console.log(`${sno++}.Socket.drain`);
});

socket.on('end', err => {
  // 调用end方法触发该事件
  // 主动调用destroy方法并不会触发该事件
  console.log(`${sno++}.Socket.end`);
});

socket.on('close', err => {
  console.log(`${sno++}.Socket.close`);
});

socket.on('error', err => {
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

socket.connect({
  port: 23333,
  // host: '192.168.1.100',
  localhost: '127.0.0.1',
  localPort: 8090
  // hints: ??
  // lookup: ??
});
