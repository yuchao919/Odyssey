const net = require('net');
const http = require('http');
const fs = require('fs');

// const postData = fs.readFileSync(`${__dirname}/aaa.gif`);

const options = {
  hostname: 'localhost',
  port: 9000,
  method: 'POST'
  // headers: {
  //   'Content-Type': 'image/gif',
  //   'Content-Length': Buffer.byteLength(postData)
  // }
};

let no = 0;

const req = http.request(options);

req.on('abort', err => {
  console.log(`No.${no++}.Request.abort`);
});

req.on('connect', err => {
  console.log(`No.${no++}.Request.connect`);
});

req.on('continue', err => {
  console.log(`No.${no++}.Request.continue`);
});

req.on('response', incomingMessage => {
  console.log(`No.${no++}.Request.reponse`);
  console.log(incomingMessage);
});

req.on('socket', socket => {
  console.log(`No.${no++}.Request.socket`);
  // socket.write(postData);
});

req.on('timeout', err => {
  console.log(`No.${no++}.Request.timeout`);
});

req.on('upgrade', err => {
  console.log(`No.${no++}.Request.upgrade`);
});

req.on('error', err => {
  console.log(`No.${no++}.Request.error`);
  console.error(`problem with request: ${err.message}`);
});

// const pd = 'hello world'

// write data to request body
// req.write(postData, () => {
//   console.log('write done');
// });
req.write('are you ok?');
req.end();

/**
 * 
    Event: 'abort'
    Event: 'connect'
    Event: 'continue'
    Event: 'response'
    Event: 'socket'
    Event: 'timeout'
    Event: 'upgrade'
    request.abort()
    request.aborted
    request.connection
    request.end([data[, encoding]][, callback])
    request.flushHeaders()
    request.getHeader(name)
    request.removeHeader(name)
    request.setHeader(name, value)
    request.setNoDelay([noDelay])
    request.setSocketKeepAlive([enable][, initialDelay])
    request.setTimeout(timeout[, callback])
    request.socket
    request.write(chunk[, encoding][, callback])

 */
