const net = require('net');

const server = net.createServer(socket => {
  console.log(getTime() + ' 3. connectionListener');
  socket.setEncoding('utf8');
  socket.on('data', buf => {
    if (buf === 'close') {
      server.close();
    } else {
      console.log(getTime() + ' receive data : ' + buf);
      socket.write('received');
      socket.destroy();
    }
  });
  socket.on('end', () => {
    console.log(getTime() + ' socket end');
  });
});

// server events
server.on('listening', () => {
  console.log(getTime() + ' 1. server listening');
});

server.on('connection', socket => {
  console.log(getTime() + ' 4. server connection');
});

server.on('close', () => {
  console.log(getTime() + ' 5. server close');
});

server.on('error', err => {
  console.log(getTime() + ' server error');
});

server.listen(8124, () => {
  console.log(getTime() + ' 2. server bound');
});

/**
 * Test this by using telnet:
 * $ telnet localhost 8124
 */

function getTime() {
  let now = new Date(),
    h = now.getHours(),
    m = now.getMinutes(),
    s = now.getSeconds(),
    f = now.getMilliseconds();
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;
  f = f < 100 ? (f < 1 ? '00' + f : '0' + f) : f;
  return `${h}:${m}:${s}.${f}`;
}
