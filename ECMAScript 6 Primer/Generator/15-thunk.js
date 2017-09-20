const fs = require('fs');
const path = require('path');
const fileAPath = path.resolve(`${__dirname}/A.txt`);
const fileBPath = path.resolve(`${__dirname}/B.txt`);

const thunkify = function(fn) {
  return function() {
    var args = new Array(arguments.length);
    var ctx = this;

    for (var i = 0; i < args.length; ++i) {
      args[i] = arguments[i];
    }

    return function(done) {
      var called;

      args.push(function() {
        if (called) return;
        called = true;
        done.apply(null, arguments);
      });

      try {
        fn.apply(ctx, args);
      } catch (err) {
        done(err);
      }
    };
  };
};

function thunkWay() {
  const Thunk = function(fn) {
    return function(...args) {
      return function(callback) {
        return fn.call(this, ...args, callback);
      };
    };
  };

  let readFileThunk = Thunk(fs.readFile);
  let filePath = path.resolve(`${__dirname}/A.txt`);
  readFileThunk(filePath, 'utf-8')((err, data) => {
    console.log(data);
  });
}

function thunk_readFile_demo() {
  var readFileThunk = thunkify(fs.readFile);

  var gen = function*() {
    var r1 = yield readFileThunk(fileAPath);
    console.log(r1.toString());
    var r2 = yield readFileThunk(fileBPath);
    console.log(r2.toString());
  };

  var g = gen();

  var r1 = g.next();
  r1.value(function(err, data) {
    if (err) throw err;
    var r2 = g.next(data);
    r2.value(function(err, data) {
      if (err) throw err;
      g.next(data);
    });
  });
}
// thunk_readFile_demo();

function thunk_run_demo() {
  function run(fn) {
    var gen = fn();

    function next(err, data) {
      var result = gen.next(data);
      if (result.done) return;
      result.value(next);
    }

    next();
  }

  var readFileThunk = thunkify(fs.readFile);

  function* g() {
    var f1 = yield readFileThunk(fileAPath);
    console.log(f1.toString());
    var f2 = yield readFileThunk(fileBPath);
    console.log(f2.toString());
  }

  run(g);
}
thunk_run_demo();
