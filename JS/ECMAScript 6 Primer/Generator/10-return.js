function eg1() {
  function* gen() {
    yield 1;
    console.log('123');
    yield 2;
    yield 3;
  }

  var g = gen();

  console.log(g.next()); // { value: 1, done: false }
  console.log(g.return('foo')); // { value: "foo", done: true } // 不往下执行，直接return
  console.log(g.next()); // { value: undefined, done: true }s
}

eg1();

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
