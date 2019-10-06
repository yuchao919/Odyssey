var co = require('co');

var fun1 = function() {
  return co(function*() {
    return '输出结果A';
  });
};

var fun2 = function() {
  return function(cb) {
    cb(null, '输出结果B');
    return;
  };
};

// co(function*() {
//   var aaa = yield fun1();
//   console.log(aaa);

//   var bbb = yield fun2();
//   console.log(bbb);
// });

async function run() {
  var aaa = await fun1();
  console.log(aaa);
  var bbb = await fun2();
  console.log(bbb);
}

run();
