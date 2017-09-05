var a = ['a', 'b', 'c'];
var iterator = a.entries();

console.log(iterator.next()); // { value: [ 0, 'a' ], done: false }
console.log(iterator.next().value); // [1, 'b']
console.log(iterator.next().value); // [2, 'c']
console.log(iterator.next()); // { value: undefined, done: true }

console.log();

var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
