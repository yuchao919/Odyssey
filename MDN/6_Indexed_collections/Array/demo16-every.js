// The every method executes the provided callback function once for each element present in the array
// until it finds one where callback returns a falsy value
var times = 0;
function isBigEnough(element, index, array) {
  console.log(times++);
  return element >= 10;
}

console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
times = 0;
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

var arr = [1, 2, 3, 4];
arr.every((elem, idx, a) => {
  elem = 1; // [1, 2, 3, 4]
  // a[idx] = 1; // [ 1, 1, 1, 1 ]
  return true;
});
console.log(arr);
