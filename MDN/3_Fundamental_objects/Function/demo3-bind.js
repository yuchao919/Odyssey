function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + ',' + this.y;
};

var p = new Point(1, 2);
console.log(p.toString()); // '1,2'

var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0 /*x*/);
// 以下这行代码在 polyfill 不支持,
// 在原生的bind方法运行没问题:
//(译注：polyfill的bind方法如果加上把bind的第一个参数，即新绑定的this执行Object()来包装为对象，Object(null)则是{}，那么也可以支持)
var YAxisPoint = Point.bind(null, 0 /*x*/);

var axisPoint = new YAxisPoint(5);
console.log(axisPoint.toString()); // '0,5'

console.log(axisPoint instanceof Point); // true
console.log(axisPoint instanceof YAxisPoint); // true
console.log(new Point(17, 42) instanceof YAxisPoint); // true
