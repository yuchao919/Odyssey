Array.prototype.removeDuplicate = function() {
  var result = [];
  var dict = {};
  for (var i = 0, len = this.length; i < len; ++i) {
    if (!dict[this[i]]) {
      result.push(this[i]);
      dict[this[i]] = 1;
    }
  }
  return result;
};

var arr = [1, 1, 2, 3, 3, 4, 5, 6, 3, 2];
console.log(arr.removeDuplicate());
