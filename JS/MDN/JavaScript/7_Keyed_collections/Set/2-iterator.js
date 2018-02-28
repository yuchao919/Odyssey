var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add('some text'); // Set { 1, 5, 'some text' }
var o = { a: 1, b: 2 };
mySet.add(o);

// iterate over items in set
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet.keys()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}
for (let item of mySet.values()) console.log(item);

// logs the items in the order: 1, "some text", {"a": 1, "b": 2}
//(key and value are the same here)
for (let [key, value] of mySet.entries()) console.log(key);

// convert Set object to an Array object, with Array.from
var myArr = Array.from(mySet); // [1, "some text", {"a": 1, "b": 2}]

// the following will also work if run in an HTML document
// mySet.add(document.body);
// mySet.has(document.querySelector('body')); // true

/* 
// converting between Set and Array
mySet2 = new Set([1, 2, 3, 4]);
mySet2.size; // 4
[...mySet2]; // [1, 2, 3, 4]

// intersect can be simulated via
var intersection = new Set([...set1].filter(x => set2.has(x)));

// difference can be simulated via
var difference = new Set([...set1].filter(x => !set2.has(x)));

// Iterate set entries with forEach
mySet.forEach(function(value) {
  console.log(value);
});

// 1
// 2
// 3
// 4
 */
