// 实现如下语法的功能：var a = (5).plus(3).minus(6); //2

Number.prototype.plus = function(num) {
  return Number(this + num);
};

Number.prototype.minus = function(num) {
  return Number(this - num);
};
var a = (5).plus(3).minus(6);
console.log(a);
