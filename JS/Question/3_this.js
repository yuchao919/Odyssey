global.val = 1;
var obj = {
  val: 2,
  dbl: function () {
    this.val *= 2;
    val *= 2;
    console.log(val);
    console.log(this.val);
  }
};
// 说出下面的输出结果
obj.dbl();
var func = obj.dbl;
func();