const assert = require('assert');

const arr = [2, 4, 6, 1, 3, 7, 8, 5, 0, 9];
const result = arr.slice().sort(function(a, b) {
  if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
  return 1;
});

const QuickSort = require('./QuickSort');

describe('Sort', function() {
  describe('QuickSort', function() {
    it('should equal', function() {
      const a = arr.slice();
      QuickSort(a, 0, a.length - 1);
      assert.deepEqual(a, result);
    });
  });
});
