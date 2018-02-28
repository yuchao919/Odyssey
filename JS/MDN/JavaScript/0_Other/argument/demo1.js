function foo(...args) {
  return args;
}
foo(1, 2, 3); // Array[3] [1, 2, 3]
console.log(foo(1, 2, 3)); // [1, 2, 3]
