// 实现如下语法的功能：var a = add(2)(3)(4); //9

/* 
function add(num) {
  num += ~~add;
  add.num = num;
  return add;
}
add.valueOf = add.toString = function() {
  return add.num;
};
 */
/* 
function add(x) {
  var sum = x;
  var tmp = function(y) {
    sum = sum + y;
    return tmp;
  };
  tmp.toString = function() {
    return sum;
  };
  return tmp;
} 
*/

function add(x) {
  var y = function(x) {
    return add(x + y);
  };
  y.toString = y.valueOf = function() {
    return x;
  };
  return y;
}
/* 
function add(n) {
  add.V = add.V ? add.V + n : n;
  // return arguments.callee;
  return add;
}
add.toString = add.valueOf = function() {
  return add.V;
}; */

var ans = add(1)(2)(3)(3); // 9
console.log(ans);
// 感觉不是很规范啊，起码在node显示不出来想要的结果

