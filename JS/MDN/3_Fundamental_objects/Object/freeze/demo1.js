var obj = {a: 'a'};

console.log(obj === Object.freeze(obj)); // true

obj.a = 'b';
console.log(obj.a); // a

function fail1() {
  'use strict';
  var o2 = {a: 'a'};
  Object.freeze(o2);

  o2.a = 'b'; // throws a TypeErrors
}
// fail1();

function fail2() {
  let b = [1, 2, 3];
  b = Object.freeze(b);
  b.push(123); // throws a TypeErrors
  console.log(b.length); // 3
}
// fail2();

obj1 = {
  internal: {}
};

Object.freeze(obj1);
obj1.internal.a = 'aValue';
console.log(obj1.internal.a); // 'aValue'
