/* 
console.log(Object.__proto__); // [Function]
console.log(Object.__proto__.__proto__); // {}
console.log(Object.__proto__.__proto__.__proto__); // null
 */

// console.log({}.__proto__); // {}
// console.log({}.__proto__.__proto__); // null
console.log({}.__proto__ === Object.prototype); // true
console.log({} === {}); // false
console.log({}.__proto__ === {}.__proto__); // true

/* 
console.log(Object.prototype); // {}
console.log(Object.prototype.prototype); // undefined

function SomeClass() {
  this.fun = function() {
    console.log('fun');
  };
}
 */
/* 
console.log(SomeClass.prototype); // Someclass {}
console.log(SomeClass.__proto__); // [Function]
console.log(SomeClass.prototype.prototype); // undefined
 */

/* 
var obj = new SomeClass();
console.log(obj.prototype); // undefined
console.log(obj.prototype === Object.getPrototypeOf(obj)); // false

console.log(obj.__proto__); // SomeClass {}
console.log(obj.__proto__ === Object.getPrototypeOf(obj)); // true
console.log(obj.__proto__.__proto__); // {}
console.log(obj.__proto__.__proto__.__proto__); // null
// console.log(obj.__proto__.__proto__.__proto__.__proto__); // TypeError
 */
