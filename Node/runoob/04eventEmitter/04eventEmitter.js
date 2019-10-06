var events = require('events');

var emitter = new events.EventEmitter();

emitter.on('someEvent', function (arg1, arg2) {
    console.log('listener1 ' + arg1 + arg2);
});

// emitter.emit('someEvent', 'asd', 123);

emitter.on('someEvent', someEventHandler);

// var someEventHandler = function (arg1, arg2) {
function someEventHandler(arg1, arg2) {
    console.log('listener2' + arg1);
}

emitter.emit('someEvent', 'aaaa', 123);