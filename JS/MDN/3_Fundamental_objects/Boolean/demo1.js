// 不要将原始值true false,和值为true false的Boolean对象相混淆.
var x = new Boolean(false);
console.log(x == false); // true
console.log(x === false); // false
if (x) {
  // this code is executed
  console.log('exec');
}

// 不要通过新建Boolean对象的方法来将一个非布尔值转化成布尔值.
// 直接使用Boolean函数才是正确的:
var y = Boolean(false);
if (y) {
  console.log('exec y'); // not executed
}
