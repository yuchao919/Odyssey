class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}

let p1 = new Point(1, 2);
let p2 = new Point(3, 4);

console.log(p1.__proto__);

console.log('/*********/');

console.log(Point.prototype);

// console.log(p2.prototype === p1.prototype);
