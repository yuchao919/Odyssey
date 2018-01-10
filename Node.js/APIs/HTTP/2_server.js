const http = require('http');

const server = new http.Server();

let no = 0;

server.on('connect', () => {
  console.log(`No.${no++}.Server.connect`);
});

server.on('connectiont', () => {
  console.log(`No.${no++}.Server.connectiont`);
});

server.on('checkContinue', () => {
  console.log(`No.${no++}.Server.checkContinue`);
});

server.on('checkExpectation', () => {
  console.log(`No.${no++}.Server.checkExpectation`);
});

server.on('clientError', (err, socket) => {
  console.log(`No.${no++}.Server.clientError`);
  debugger;
});

server.on('close', () => {
  console.log(`No.${no++}.Server.close`);
});

server.on('request', (req, res) => {
  console.log(`No.${no++}.Server.request`);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('hello world!<br>');
});

server.on('upgrade', () => {
  console.log(`No.${no++}.Server.upgrade\n`);
});

server.listen(8080);
/**
 * 
    Event: 'checkContinue'
    Event: 'checkExpectation'
    Event: 'clientError'
    Event: 'close'
    Event: 'connect'
    Event: 'connection'
    Event: 'request'
    Event: 'upgrade'
 */
