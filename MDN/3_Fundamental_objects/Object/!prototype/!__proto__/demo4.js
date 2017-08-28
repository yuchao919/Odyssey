var fn = function() {};
fn.prototype.myname = function() {
  console.log('myname');
};

var obj = {
  __proto__: fn.prototype
};

obj.myname(); //myname
