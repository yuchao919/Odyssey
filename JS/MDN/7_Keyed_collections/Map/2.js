var myMap = new Map();
myMap.set(NaN, 'not a number');

myMap.get(NaN); // "not a number"

var otherNaN = Number('foo');
myMap.get(otherNaN); // "not a number"
