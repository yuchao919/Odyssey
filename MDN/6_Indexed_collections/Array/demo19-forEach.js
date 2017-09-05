var items = ['item1', 'item2', 'item3'];
var copy = [];

var i = 0;
items.forEach(function(item) {
  items.push((++i).toString());
});
console.log(items); // [ 'item1', 'item2', 'item3', '1', '2', '3' ]
