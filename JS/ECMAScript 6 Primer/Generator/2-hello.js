function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

console.log(Object.prototype.toString.call(hw)); // [object Generator]

console.log(hw.next());
console.log(hw.next());
console.log(hw.next());
console.log(hw.next());

// { value: 'hello', done: false }
// { value: 'world', done: false }
// { value: 'ending', done: true }
// { value: undefined, done: true }
