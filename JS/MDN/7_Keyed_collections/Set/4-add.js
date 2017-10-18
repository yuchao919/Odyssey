var mySet = new Set();

mySet.add(1);
mySet.add(5).add('some text'); // chainable

console.log(mySet);
// Set [1, 5, "some text"]
