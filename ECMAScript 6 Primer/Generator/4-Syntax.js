function* demo() {
  // console.log('Hello' + yield); // SyntaxError
  // console.log('Hello' + yield 123); // SyntaxError

  console.log('Hello' + (yield)); // OK
  console.log('Hello' + (yield 123)); // OK
}

var d = demo();
console.log(d.next(' Generator'));
console.log(d.next(' javascript'));
console.log(d.next(' world'));

// { value: undefined, done: false }
// Hello javascript
// { value: 123, done: false }
// Hello world
// { value: undefined, done: true }
