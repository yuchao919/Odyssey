const path = require('path');
var fs = require('fs');
var http = require('http');

var ws = require('nodejs-websocket');

http
  .createServer(function(req, res) {
    fs.createReadStream(path.join(__dirname, 'index.html')).pipe(res);
  })
  .listen(8080);

var server = ws.createServer(function(connection) {
  connection.nickname = null;
  connection.on('text', function(str) {
    if (connection.nickname === null) {
      connection.nickname = str;
      broadcast(str + ' entered');
    } else broadcast('[' + connection.nickname + '] ' + str);
  });
  connection.on('error', err => {
    console.log(err.message);
  });
  connection.on('close', function() {
    broadcast(connection.nickname + ' left');
  });
});

server.on('error', err => {
  console.log(err.message);
});

server.listen(8081);

function broadcast(str) {
  server.connections.forEach(function(connection) {
    connection.sendText(str);
  });
}
