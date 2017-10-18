var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
var p4 = Promise.resolve();

Promise.all([p1, p2, p3, p4]).then(values => {
  console.log(values); // [ 3, 1337, 'foo', undefined ]
});

/* 
// this will be counted as if the iterable passed is empty, so it gets fulfilled
var p = Promise.all([1, 2, 3]);
// this will be counted as if the iterable passed contains only the resolved promise with value "444", so it gets fulfilled
var p2 = Promise.all([1, 2, 3, Promise.resolve(444)]);
// this will be counted as if the iterable passed contains only the rejected promise with value "555", so it gets rejected
var p3 = Promise.all([1, 2, 3, Promise.resolve(555)]);

// using setTimeout we can execute code after the stack is empty
setTimeout(function() {
  console.log(p);
  console.log(p2);
  console.log(p3);
});

// logs
// Promise { <state>: "fulfilled", <value>: Array[3] }
// Promise { <state>: "fulfilled", <value>: Array[4] }
// Promise { <state>: "rejected", <reason>: 555 }
 */
