const path = require('path');
const http = require('http');

const express = require('express');
const app = express();
const server = http.Server(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

// console.log(__dirname);
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
  });
});

server.listen(port, function() {
  console.log('listening on *:' + port);
});
