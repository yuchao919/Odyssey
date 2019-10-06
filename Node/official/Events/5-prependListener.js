const server = new (require('events')).EventEmitter();

server.on('connection', () => {
  console.log('connected!');
});

server.prependListener('connection', stream => {
  console.log('someone connected!');
});

server.emit('connection');
// somsomeone connected!
// connected!
