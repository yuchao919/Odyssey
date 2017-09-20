function eg1() {
  function* g() {}

  g.prototype.hello = function() {
    return 'hi!';
  };

  let obj = g();

  console.log(obj instanceof g); // true
  console.log(obj.hello()); // 'hi!'
}

function eg2() {
  function* g() {
    this.a = 11;
  }

  let obj = g();
  console.log(obj.a); // undefined
}

function eg3() {
  function* F() {
    yield (this.x = 2);
    yield (this.y = 3);
  }

  new F();
  // TypeError: F is not a constructor
}

function eg4() {
  function* F() {
    this.a = 1;
    yield (this.b = 2);
    yield (this.c = 3);
  }
  var obj = {};
  var f = F.call(obj);

  f.next(); // Object {value: 2, done: false}
  f.next(); // Object {value: 3, done: false}
  f.next(); // Object {value: undefined, done: true}

  console.log(obj.a); // 1
  console.log(obj.b); // 2
  console.log(obj.c); // 3
}

function eg5() {
  function* F() {
    this.a = 1;
    yield (this.b = 2);
    yield (this.c = 3);
  }
  var f = F.call(F.prototype);

  f.next(); // Object {value: 2, done: false}
  f.next(); // Object {value: 3, done: false}
  f.next(); // Object {value: undefined, done: true}

  console.log(f.a); // 1
  console.log(f.b); // 2
  console.log(f.c); // 3
}

function eg6() {
  function* gen() {
    this.a = 1;
    yield (this.b = 2);
    yield (this.c = 3);
  }

  function F() {
    return gen.call(gen.prototype);
  }

  var f = new F();

  f.next(); // Object {value: 2, done: false}
  f.next(); // Object {value: 3, done: false}
  f.next(); // Object {value: undefined, done: true}

  console.log(f.a); // 1
  console.log(f.b); // 2
  console.log(f.c); // 3
}
