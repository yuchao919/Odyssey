'use strict';
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

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

myEmitter.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});

myEmitter.emit('event', 'a', 'b');
