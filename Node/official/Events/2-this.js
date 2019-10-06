const MyEmitter = require('events').EventEmitter;
const myEmitter = new MyEmitter();

myEmitter.on('event', function(a, b) {
  console.log(a, b, this);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined }
});
myEmitter.emit('event', 'a', 'b');

myEmitter.on('arrow', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter.emit('arrow', 'a', 'b');
