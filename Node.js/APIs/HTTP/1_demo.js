const querystring = require('querystring');
const http = require('http');

const postData = querystring.stringify({
  msg: 'Hello World!'
});

const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, res => {
  console.log(`STATUS: ${res.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', chunk => {
    console.log(`BODY: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', e => {
  console.error(`problem with request: ${e.message}`);
});

// write data to request body
req.write(postData);
req.end();

/**
 * 
Table of Contents

    HTTP
        Class: http.Agent
            new Agent([options])
            agent.createConnection(options[, callback])
            agent.keepSocketAlive(socket)
            agent.reuseSocket(socket, request)
            agent.destroy()
            agent.freeSockets
            agent.getName(options)
            agent.maxFreeSockets
            agent.maxSockets
            agent.requests
            agent.sockets
        Class: http.ClientRequest
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
        Class: http.Server
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
        Class: http.ServerResponse
            Event: 'close'
            Event: 'finish'
            response.addTrailers(headers)
            response.connection
            response.end([data][, encoding][, callback])
            response.finished
            response.getHeader(name)
            response.getHeaderNames()
            response.getHeaders()
            response.hasHeader(name)
            response.headersSent
            response.removeHeader(name)
            response.sendDate
            response.setHeader(name, value)
            response.setTimeout(msecs[, callback])
            response.socket
            response.statusCode
            response.statusMessage
            response.write(chunk[, encoding][, callback])
            response.writeContinue()
            response.writeHead(statusCode[, statusMessage][, headers])
        Class: http.IncomingMessage
            Event: 'aborted'
            Event: 'close'
            message.destroy([error])
            message.headers
            message.httpVersion
            message.method
            message.rawHeaders
            message.rawTrailers
            message.setTimeout(msecs, callback)
            message.socket
            message.statusCode
            message.statusMessage
            message.trailers
            message.url
        http.METHODS
        http.STATUS_CODES
        http.createServer([requestListener])
        http.get(options[, callback])
        http.globalAgent
        http.request(options[, callback])


 * 
 */
