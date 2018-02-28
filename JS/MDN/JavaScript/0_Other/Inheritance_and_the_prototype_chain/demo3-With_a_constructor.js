function Graph() {
  this.vertices = [];
  this.edges = [];
  this.addEdges = function(e) {
    this.edges.push(e);
  };
}

Graph.prototype = {
  addVertex: function(v) {
    this.vertices.push(v);
  }
};

var g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.

console.log(g.hasOwnProperty('vertices')); // true

console.log(g.hasOwnProperty('nope')); // false

console.log(g.hasOwnProperty('addVertex')); // false

console.log(g.__proto__.hasOwnProperty('addVertex')); // true

console.log(g.hasOwnProperty('addEdges')); // true

// 这种测试不准，谁在前谁就慢
console.time('addEdges');
var i = 0;
while (i < 100000) {
  g.addEdges(i);
  ++i;
}
console.timeEnd('addEdges');

console.time('addVertex');
i = 0;
while (i < 100000) {
  g.addVertex(i);
  ++i;
}
console.timeEnd('addVertex');


