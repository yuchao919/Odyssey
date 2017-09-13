console.log(/*******/);
var objArr = [
  1, // [object Number]
  'str', // [object String]
  true, // [object Boolean]
  Symbol('foo'), // [object Symbol]
  function foo(params) {},
  { 1: 1 }, // [object Object]
  null, // [object Null]
  undefined, // [object Undefined]

  Number(1), // [object Number]
  String('str'), // [object String]
  new Date(), // [object Date]
  new Date().getTime, // [object Function]
  new Date().getTime(), // [object Number]
  [1, 2, 3], // [object Array]
  [1, 2, 3].entries(), // [object Array Iterator]
  /\d/, // [object RegExp]
  NaN, // [object Number]
  Infinity, // [object Number]
  new Map(), // [object Map]
  new Map().entries(), // [object Map Iterator]
  new Map().keys(), // [object Map Iterator]
  new Set() // [object Set]
].forEach(obj => {
  console.log(Object.prototype.toString.call(obj));
});

// var isType = Function.prototype.apply.bind(Object.prototype.toString);

// console.log(isType(1)); // [object Number]
// console.log(isType(Number(1))); // [object Number]

// console.log(isType('str')); // [object String]
// console.log(isType(String('str'))); // [object String]

// console.log(isType(new Date())); // [object Date]

// console.log(isType([1, 2, 3])); // [object Array]
// console.log(isType([1, 2, 3].entries())); // [object Array Iterator]
