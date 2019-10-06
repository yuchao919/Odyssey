const net = require('net');

// socket default setting
const socket = new net.Socket({
  fd: null,
  allowHalfOpen: false,
  readable: false,
  writable: false
});
