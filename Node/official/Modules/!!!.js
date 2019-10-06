//exports.x = "hello";
let a = require('./a');
console.log(a); // exports.x = "hello";        { x: 'hello' }
console.log(a.x); // hello

/*  
//exports = {x: "hello"};
let b = require("./b");
console.log(b); // {}
console.log(b.x); // undefined
*/

/*  
//exports.x = function() {this.y = "hello";};
let c = require("./c");
console.log(c); // { x: [Function] }
console.log(c.x); // [Function]
console.log(c.x()); // undefined
// console.log(c.x().y); // Error
console.log(new c.x()); // { y: 'hello' }
console.log(new c.x().y); // hello 
 */

/* 
//exports.x = function() {return {y: "hello"};};
let d = require("./d");
console.log(d); // { x: [Function] }
console.log(d.x); // [Function]
console.log(d.x()); // { y: 'hello' }
console.log(d.x().y); // hello
// console.log(new d());
console.log(new d.x()); // { y: 'hello' }
console.log(new d.x().y); // hello
 */

/*  
//module.exports.x = "hello";
let e = require("./e");
console.log(e); // { x: 'hello' }
console.log(e.x); // hello
// console.log(new e());  
*/

/*  
//module.exports = {x: "hello"};
let f = require("./f");
console.log(f); // { x: 'hello' }
console.log(f.x); // hello 
*/

/* 
 //module.exports.x = {y: "hello"};
let g = require('./g');
console.log(g); // { x: { y: 'hello' } }
console.log(g.x); //{ y: 'hello' }
 */

/*  
//module.exports.x = function() {this.y = "hello";};
let h = require("./h");
console.log(h); // { x: [Function] }
console.log(h.x);  // [Function]
console.log(h.x()); // undefined
// console.log(h.x().y); // ERROR
console.log(new h.x()); // { y: 'hello' }
console.log(new h.x().y); // hello
 */

/* 
//module.exports.x = function() {return "hello";};
let i = require("./i");
console.log(i); // { x: [Function] }
console.log(i.x); // [Function]
console.log(i.x()); // hello
// console.log(new i()); // ERROR
console.log(new i.x()); // {} 
*/

/* 
// module.exports.x = function() {return {y: "hello"};};
let j = require("./h");
console.log(j); // { x: [Function] }
console.log(j.x); // [Function]
console.log(j.x()); // undefined
console.log(new j.x()); // { y: 'hello' }
console.log(new j.x().y); // hello 
*/

/* 
// module.exports = function() {this.y = "hello";};
let k = require("./k");
console.log(k); // [Function]
console.log(k()); // undefined
console.log(new k()); // {y: 'hello'}
console.log(new k().y); // hello 
*/

/* 
// module.exports = function() {return "hello";};
let l = require("./l");
console.log(l); // [Function]
console.log(l()); // hello
console.log(new l()); // {}
 */

/* 
// module.exports = function() {return {y: "hello"};};
let m = require("./m");
console.log(m); // [Function]
console.log(m()); // { y: 'hello' }
console.log(m().y); // hello
console.log(new m()); // { y: 'hello' }
console.log(new m().y); // hello
 */

/* 
// exports = function() {this.y = "hello";};
let n = require("./n");
console.log(n); // {}
// console.log(n()); // ERROR
// console.log(new n()); // ERROR
 */

/* 
// exports = function() {return {y: "hello"};};
let o = require("./o");
console.log(o); //{}
 */

/* 
// exports = "hello";
let p = require("./p");
console.log(p); // {} 
*/

/* 
// module.exports = "hello";
let r = require("./r");
console.log(r); // hello 
*/

/* 
// setTimeout(() => {module.exports = { x: 'hello' };}, 0);
let s = require("./s");
console.log(s); // {}
console.log(s.x); // undefiend
setTimeout(function(params) {console.log(s.x);}, 1000); // undefined 
*/

/* 
// setTimeout(() => {exports.x = "hello";}, 0);
let t = require("./t");
console.log(t); // {}
console.log(t.x); // undefined
setTimeout(function() {console.log(t.x);}, 1e3); // hello
 */

//
//

/* 
function x() {
  this.y = "hello";
}

console.log(x); // [Function: x]
console.log(x.y); // undefined
console.log(x()); // undefined
// console.log(x().y); // ERROR
console.log(new x()); // x { y: 'hello' }
console.log(new x().y); // hello 
*/

/* 
function x() {
  return {z: "world"};
}

console.log(x); // [Function: x]
console.log(x()); // { z: 'world' }
console.log(x().z); // world
console.log(new x()); // { z: 'world' }
console.log(new x().z); // { z: 'world' }
 */

/*  
function x() {
  this.y = "hello";
  return {z: "world"};
}

console.log(x); // [Function: x]
console.log(x.y); // undefined
console.log(x().y); // undefined
console.log(x().z); // world
console.log(new x().y); // undefined
console.log(new x().z); // world
 */

/*  
const u = require('./u');
console.log(u);
console.log(u());
console.log(u.abc);
 */
