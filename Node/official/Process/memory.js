var showMem = function() {
  var mem = process.memoryUsage();
  var format = function(bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
  };
  console.log(
    'Process: heapTotal ' +
      format(mem.heapTotal) +
      ' heapUsed ' +
      format(mem.heapUsed) +
      ' rss ' +
      format(mem.rss) +
      ' external ' +
      format(mem.external)
  );
  console.log('-----------------------------------------------------------');
};

var useMem = function() {
  var size = 20 * 1024 * 1024;
  var arr = Buffer.alloc(size);
  for (var i = 0; i < size; i++) {
    arr[i] = 0;
  }
  return arr;
};

var Bonus = function(salary) {
  var salary = salary;
  return new function() {
    this.getSalary = function() {
      return salary;
    };
  }();
};

// var objUseMem = function() {
//   var size = 1024 * 1024;
//   var arr = new Array(size);
//   for (var i = 0; i < size; i++) {
//     arr[i] = new Bonus(i++);
//   }
//   return arr;
// };

var objUseMem = function() {
  var size = 1024 * 1024;
  var arr = new ArrayBuffer(size);
  for (var i = 0; i < size; i++) {
    arr[i] = new Bonus(i++);
  }
  return arr;
};

var total = [];
for (var j = 0; j < 100; j++) {
  showMem();
  total.push(useMem());
  // total.push(objUseMem());
}
total.forEach(arr => {
  arr = null;
});
total = null;
setInterval(showMem, 1e3);
