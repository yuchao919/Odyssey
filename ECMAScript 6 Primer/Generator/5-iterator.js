var myIterable = {};
myIterable[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...myIterable]); // [1, 2, 3]

function* gen() {
  // some code
}

var g = gen();

console.log(g[Symbol.iterator]() === g); // true
