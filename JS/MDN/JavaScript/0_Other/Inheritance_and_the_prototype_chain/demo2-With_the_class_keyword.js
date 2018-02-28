'use strict';
/**
 * ECMAScript 2015 introduced a new set of keywords implementing classes.
 * Although these constructs look like those familiar to developers of class-based languages, they are not the same. 
 * JavaScript remains prototype-based.
 * The new keywords include class, constructor, static, extends, and super.
 */

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }
  get area() {
    return this.height * this.width;
  }
  set sideLength(newLength) {
    this.height = newLength;
    this.width = newLength;
  }
}

var square = new Square(2);

// 这种写法...
console.log(square.area); // 4
square.sideLength = 3;
console.log(square.area); // 9
