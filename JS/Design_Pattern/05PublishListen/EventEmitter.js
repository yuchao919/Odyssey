var EventEmitter = function() {
  var self = this;
  this.eventDictionary = {};
  this.on = function(eventName, callback) {
    // if (self.eventNameList.indexOf(eventName) === -1) {
    //   self.eventNameList.push(eventName);
    // }
    var eventDictionary = self.eventDictionary;
    if (!eventDictionary.hasOwnProperty(eventName)) {
      eventDictionary[eventName] = [callback];
    } else {
      eventDictionary[eventName].push(callback);
    }
  };
  this.emit = function(eventName) {
    var eventDictionary = self.eventDictionary;
    if (!eventDictionary.hasOwnProperty(eventName)) {
      throw new Error('There is no such event');
    }
    var args = Array.prototype.slice.call(arguments, 1);
    eventDictionary[eventName].forEach(callback => {
      if (typeof callback === 'function') {
        callback.apply(null, args);
      }
    });
  };
};

var myEmitter = new EventEmitter();

myEmitter.on('connect', (hello, world) => {
  console.log(hello + ' ' + world);
});

myEmitter.emit('connect', 'hello', 'world');
