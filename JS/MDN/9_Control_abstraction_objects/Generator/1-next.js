function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen(); // "Generator { }"
var result = g.next(); // "Object { value: 1, done: false }"
// g.next(); // "Object { value: 2, done: false }"
// g.next(); // "Object { value: 3, done: false }"
// g.next(); // "Object { value: undefined, done: true }"

while (result && !result.done) {
  console.log(result);
  result = g.next();
}
console.log(result);

// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

// Sending values to the generator
function* gen2() {
  console.log('enter');
  while (true) {
    var value = yield null;
    console.log(value);
  }
}

var g2 = gen2();
g2.next(1);
// "{ value: null, done: false }"
g2.next(2);
// "{ value: null, done: false }"
// 2
g2.next(3);
