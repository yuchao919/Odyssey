function foo(a) {
  ((a, b, c) => {
    console.log([...arguments]); // [ 'a' ]
  })(1, 2, 3);
}
foo('a'); // [ 'a' ]

function bar(b) {
  (function(x, y, z) {
    console.log([...arguments]); // [ 1, 2, 3 ]
  })(1, 2, 3);
}
bar('b'); // [ 1, 2, 3 ]
