var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// describe('获取用户名', function() {
//   describe('getName()', function() {
//     it('应该返回Hello', function() {
//       assert.equal('Hello', 'Hello');
//     });
//   });
// });

// describe('获取用户名', function() {
//   describe('getName()', function() {
//     it('应该返回Hello', function() {
//       assert.equal('Hello', 'world');
//     });
//   });
// });
