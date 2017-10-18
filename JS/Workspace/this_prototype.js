function Test() {
  this.text = function() {
    console.log('defined by this');
  };
}
Test.prototype.test = function() {
  console.log('defined by prototype');
};
var _o = new Test();
_o.test(); //输出“defined by prototype”
