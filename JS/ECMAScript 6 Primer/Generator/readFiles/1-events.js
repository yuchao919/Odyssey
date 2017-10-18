const fs = require('fs');
const path = require('path');

filePaths = ['A', 'B', 'C', 'D'].map(val => {
  return path.resolve(`${__dirname}/../${val}.txt`);
});

const EventEmitter = function() {
  const self = this;
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

const emitter = new EventEmitter();

let fileIndex = 0;
let fileCount = filePaths.length;

emitter.on('read', filePath => {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
    fileIndex++;
    if (fileIndex < fileCount) {
      emitter.emit('read', filePaths[fileIndex]);
    } else {
      emitter.emit('end');
    }
  });
});

emitter.on('end', () => {
  console.log('All file are read.');
  // emitter.removeAllListeners();
});

emitter.emit('read', filePaths[fileIndex]);
