/**
 * hypothetical implementation of require()
 */
/**
 * 这也就是module.exports对象不为空的时候exports对象就自动忽略，
 * 因为module.exports通过赋值方式已经和exports对象指向的变量不同了，
 * exports对象怎么改和module.exports对象没关系了。
 *      exports = module.exports = somethings
 */

function require(/* ... */) {
  const module = { exports: {} };
  ((module, exports) => {
    exports = module.exports = undefined;

    // Your module code here. In this example, define a function.
    function someFunc() {}
    exports = someFunc;
    // At this point, exports is no longer a shortcut to module.exports, and
    // this module will still export an empty default object.
    module.exports = someFunc;
    // At this point, the module will now export someFunc, instead of the
    // default object.

    if (module.exports !== undefined) {
      exports = module.exports;
    }
  })(module, module.exports);
  return module.exports;
}

// function re(/* ... */) {
//   const modu = {expo: {}};
//   ((modu, expo) => {
//     expo.y = "world";
//   })(modu, modu.expo);

//   return modu.expo;
// }

function requ() {
  const modu = { expo: {} };
  ((modu, expo) => {
    expo = modu.expo = undefined;

    expo = { y: 'world' };
    // modu.expo = { x: 'hello' };

    if (modu.expo !== undefined) {
      expo = modu.expo;
    }
  })(modu, modu.expo);
  return modu.expo;
}

var a = requ();
console.log(a);

/* 
function changeValue(p) {
  p = 1;
}
var q = 0;
changeValue(q);
console.log(q); 0
 */

/* 
function changeObject(p) {
  p.a = 1;
}
var obj = {};
changeObject(obj);
console.log(obj); // { a: 1 }
 */
/* 
function changeObjectValue(p) {
  p = {a: 1};
}
var objV = {};
changeObjectValue(objV);
console.log(objV); // {}
*/
