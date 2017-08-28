// Object.preventExtensions returns the object
// being made non-extensible.
var obj = {};
var obj2 = Object.preventExtensions(obj);
var obj3 = Object.preventExtensions({});
obj === obj2; // true
console.log(obj2 === obj3);

// Objects are extensible by default.
var empty = {};
Object.isExtensible(empty); // === true

// ...but that can be changed.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Object.defineProperty throws when adding
// a new property to a non-extensible object.
var nonExtensible = {removable: true};
Object.preventExtensions(nonExtensible);
Object.defineProperty(nonExtensible, 'new', {
  value: 8675309
}); // throws a TypeError

// In strict mode, attempting to add new properties
// to a non-extensible object throws a TypeError.
function fail() {
  'use strict';
  // throws a TypeError
  nonExtensible.newProperty = 'FAIL';
}
fail();

// EXTENSION (only works in engines supporting __proto__
// (which is deprecated. Use Object.getPrototypeOf
// instead)): A non-extensible object's
// prototype is immutable.
var fixed = Object.preventExtensions({});
fixed.__proto__ = {oh: 'hai'}; // throws a TypeError
