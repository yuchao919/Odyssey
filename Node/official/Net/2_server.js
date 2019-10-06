const net = require('net');

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
const SocketEventNames = [
  'close',
  'connect',
  'data',
  'drain',
  'end',
  'error',
  'lookup',
  'timeout'
];

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

const ServerEventNames = ['close', 'connection', 'error', 'listening'];

// const server = net.createServer((socket) => {

//   // for (const na of eventNames) {
//   //   socket.on(na, () => {
//   //     console.log('serverEvent:' + na);
//   //   })
//   // }

//   // socket.on('data', buf => {
//   //   console.log('server:data');
//   // });
// });

const server = new net.Server();

console.log(server.listening);

// for (const na of ServerEventNames) {
//   server.on(na, () => {
//     console.log(`ServerEvent: ${na}`);
//   });
// }

// server.listen(8089, () => {
//   console.log('Begin Listening');
// });

// setTimeout(() => {
//   server.close();
// }, 2e4);
