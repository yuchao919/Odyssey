// var namelistA = new Array(4294967296); //2 to the 32nd power = 4294967296 //RangeError: Invalid array length
// var namelistC = new Array(-100); //negative sign //RangeError: Invalid array length

var namelistB = [];
namelistB.length = Math.pow(2, 32) - 1; //set array length less than 2 to the 32nd power
console.log(namelistB.length); //4294967295

var numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
