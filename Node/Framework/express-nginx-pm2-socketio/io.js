const http = require('http');

const socketIO = require('socket.io');
const redis = require('socket.io-redis');
const logger = require('log4js').getLogger();

module.exports = creatSocketServic;

function creatSocketServic(server) {
  const io = socketIO(server);
  io.adapter(redis({ host: 'localhost', port: 6379, auth_pass: 'Qwer@1234' }));
  logger.debug('bind socketio service');
  io.on('connection', onConnection);
}

let numUsers = 0;

function onConnection(socket) {
  // logger.debug(`connect to ${process.pid}`);
  socket.emit('my-name-is', process.env.NAME || 'Unknown');

  var addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on('new message', function(data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function(username) {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', function() {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', function() {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function() {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
}
