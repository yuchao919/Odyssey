/**
 * The map() method creates a new array with the results of calling a provided function on every element in the calling array.e
 */

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
  return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt); // 自动返回值，不需要写内部return
console.log(roots);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]


