function eg0(params) {
  var g = function*() {
    try {
      yield;
    } catch (e) {
      console.log('内部捕获', e);
    }
  };

  var i = g();
  i.next();

  try {
    i.throw('a');
    i.throw('b');
  } catch (e) {
    console.log('外部捕获', e);
  }
  // 内部捕获 a
  // 外部捕获 b
}
eg0();

function eg1() {
  var g = function*() {
    while (true) {
      try {
        yield;
      } catch (e) {
        if (e != 'a') throw e;
        console.log('内部捕获', e);
      }
    }
  };

  var i = g();
  i.next();

  try {
    throw new Error('a');
    throw new Error('b');
  } catch (e) {
    console.log('外部捕获', e);
  }
  // 外部捕获 [Error: a]
}

function eg2() {
  var g = function*() {
    while (true) {
      yield;
      console.log('内部捕获', e);
    }
  };

  var i = g();
  i.next();

  try {
    i.throw('a');
    i.throw('b');
  } catch (e) {
    console.log('外部捕获', e);
  }
  // 外部捕获 a
}

function eg3() {
  var gen = function* gen() {
    yield console.log('hello');
    yield console.log('world');
  };

  var g = gen();
  g.next();
  g.throw();
  // hello
  // Uncaught undefined
}

function eg4() {
  var gen = function* gen() {
    try {
      yield console.log('a');
    } catch (e) {
      // ...
    }
    yield console.log('b');
    yield console.log('c');
  };

  var g = gen();
  g.next(); // a
  g.throw(); // b
  g.next(); // c
}
// 上面代码中，g.throw方法被捕获以后，自动执行了一次next方法
// 所以会打印b。另外，也可以看到，只要 Generator 函数内部部署了try...catch代码块，
// 那么遍历器的throw方法抛出的错误，不影响下一次遍历。

function eg5() {
  var gen = function* gen() {
    yield console.log('hello');
    yield console.log('world');
  };

  var g = gen();
  g.next();

  try {
    throw new Error();
  } catch (e) {
    g.next();
  }
  // hello
  // world
}
// 上面代码中，throw命令抛出的错误不会影响到遍历器的状态,
// 所以两次执行next方法，都进行了正确的操作。

function eg6() {
  function* foo() {
    var x = yield 3;
    var y = x.toUpperCase();
    yield y;
  }

  var it = foo();

  it.next(); // { value:3, done:false }

  try {
    it.next(42);
  } catch (err) {
    console.log(err);
  }
}

function eg7() {
  function* g() {
    yield 1;
    console.log('throwing an exception');
    throw new Error('generator broke!');
    yield 2;
    yield 3;
  }

  function log(generator) {
    var v;
    console.log('starting generator');
    try {
      v = generator.next();
      console.log('第一次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    try {
      v = generator.next();
      console.log('第二次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    try {
      v = generator.next();
      console.log('第三次运行next方法', v);
    } catch (err) {
      console.log('捕捉错误', v);
    }
    console.log('caller done');
  }

  log(g());
  // starting generator
  // 第一次运行next方法 { value: 1, done: false }
  // throwing an exception
  // 捕捉错误 { value: 1, done: false }
  // 第三次运行next方法 { value: undefined, done: true }
  // caller done
}
