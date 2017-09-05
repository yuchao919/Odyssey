console.log(
  'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.'
);

var cat = 'cat';
(function() {
  'use strict';
  cat[0] = 'b'; // TypeError
});
// ()

console.log(cat instanceof String); // false(as Boolean and Number)

var s_prim = 'foo';
var s_obj = new String(s_prim);

console.log(typeof s_prim); // Logs "string"
console.log(typeof s_obj); // Logs "object"

var s1 = '2 + 2'; // creates a string primitive
var s2 = new String('2 + 2'); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(eval(s2.valueOf())); // returns the number 4
