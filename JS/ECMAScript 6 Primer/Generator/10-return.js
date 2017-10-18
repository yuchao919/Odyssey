function eg1() {
  function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }

  var g = gen();

  g.next(); // { value: 1, done: false }
  g.return('foo'); // { value: "foo", done: true }
  g.next(); // { value: undefined, done: true }s
}

function eg2() {
  function* numbers() {
    yield 1;
    try {
      yield 2;
      yield 3;
    } finally {
      yield 4;
      yield 5;
    }
    yield 6;
  }
  var g = numbers();
  g.next(); // { value: 1, done: false }
  g.next(); // { value: 2, done: false }
  g.return(7); // { value: 4, done: false }
  g.next(); // { value: 5, done: false }
  g.next(); // { value: 7, done: true }
}
// 上面代码中，调用return方法后，就开始执行finally代码块，
// 然后等到finally代码块执行完，再执行return方法。
