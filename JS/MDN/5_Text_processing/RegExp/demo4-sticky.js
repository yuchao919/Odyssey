var str = '#foo#';
var regex = /foo/y;

regex.lastIndex = 1;
console.log(regex.test(str)); // true
regex.lastIndex = 5;
console.log(regex.test(str)); // false (lastIndex is taken into account with sticky flag)
console.log(regex.lastIndex); // 0 (reset after match failure)
