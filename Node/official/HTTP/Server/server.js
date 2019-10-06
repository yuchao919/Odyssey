const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.end();
});
server.on('connection', () => {
  console.log('here');
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(9000);
