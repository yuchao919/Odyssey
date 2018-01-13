const fs = require('fs');
const url = require('url');

const http = require('http');

const server = http.createServer();

let no = 0;

server.on('checkContinue', () => {
  console.log(`No.${no++}.Server.checkContinue`);
});

server.on('checkExpectation', () => {
  console.log(`No.${no++}.Server.checkExpectation`);
});

server.on('clientError', (err, socket) => {
  console.log(`No.${no++}.Server.clientError`);
});

server.on('close', () => {
  console.log(`No.${no++}.Server.close`);
});

server.on('connect', () => {
  console.log(`No.${no++}.Server.connect`);
});

server.on('connectiont', () => {
  console.log(`No.${no++}.Server.connectiont`);
});


let fw;

server.on('request', (incomingMessage, serverResponse) => {
  serverResponse.writeHead(200, { 'Content-Type': 'text/html' });
  serverResponse.end('hello world!<br>');
});

server.on('upgrade', () => {
  console.log(`No.${no++}.Server.upgrade\n`);
});

server.listen(8080, () => {
  console.log('server listening');
});



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
    server.close([callback])
    server.listen()
    server.listening
    server.maxHeadersCount
    server.setTimeout([msecs][, callback])
    server.timeout
    server.keepAliveTimeout
 */
