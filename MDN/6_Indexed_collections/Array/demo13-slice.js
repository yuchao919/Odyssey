var a = ['zero', 'one', 'two', 'three'];
var sliced = a.slice(1, -1);

console.log(a); // ['zero', 'one', 'two', 'three']
console.log(sliced); // ['one', 'two']
console.log(Array.prototype.slice.call('abc')); // [ 'a', 'b', 'c' ]
console.log(Array.prototype.slice.call(123)); // []

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
citrus[0] = 'Olive';
console.log(fruits); // [ 'Banana', 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log(citrus); // [ 'Olive', 'Lemon' ]

(function(a, b, c) {
  console.log(Array.prototype.slice.call(arguments)); // [ 1, 2, 3 ]
})(1, 2, 3);

/* 
// Using slice, create newCar from myCar.
var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, 'cherry condition', 'purchased 1997'];
var newCar = myCar.slice(0, 2);

// Display the values of myCar, newCar, and the color of myHonda
//  referenced from both arrays.
console.log('myCar = ' + JSON.stringify(myCar));
console.log('newCar = ' + JSON.stringify(newCar));
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);

// Change the color of myHonda.
myHonda.color = 'purple';
console.log('The new color of my Honda is ' + myHonda.color);

// Display the color of myHonda referenced from both arrays.
console.log('myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);
 */
