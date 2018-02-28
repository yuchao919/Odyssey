var arr = ['a', 'b', 'c'];
var iterator = arr.keys();

console.log(iterator); // {}
console.log(typeof iterator); // object
console.log(Object.prototype.toString.call(iterator)); // [object Array Iterator]
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: undefined, done: true }
