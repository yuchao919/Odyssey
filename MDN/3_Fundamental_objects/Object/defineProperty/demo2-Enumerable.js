var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3
}); // enumerable defaults to false
o.d = 4; // enumerable defaults to true
// when creating a property by setting it

for (var i in o) {
  console.log(i);
}
// logs 'a' and 'd' (in undefined order)

console.log(Object.keys(o)); // ['a', 'd']

console.log(o.propertyIsEnumerable('a')); // true
console.log(o.propertyIsEnumerable('b')); // false
console.log(o.propertyIsEnumerable('c')); // false
console.log(o.propertyIsEnumerable('d')); // true
console.log(o.propertyIsEnumerable('e')); // false
