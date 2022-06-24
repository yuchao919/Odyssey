/**
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 * The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.
 */


/**
* @param {string} s
* @return {boolean}
*/
var isValid = function (s) {
  var stack = [];
  var len = s.length;
  var left = ['(', '{', '['];
  var right = [')', '}', ']']
  var pair = { "(": ")", "{": "}", "[": "]" }
  
  for (var i = 0; i < len; ++i) {
    var ch = s[i];
    if (left.indexOf(ch) !== -1) {
      stack.push(ch);
    } else if (right.indexOf(ch) !== -1) {
      var r_ch = stack.pop();
      if (ch !== pair[r_ch]) {
        return false
      }
    }
  }
  return stack.length === 0;
};

[
  '({[]})',
  '(]'
].forEach((item) => {
  console.log(isValid(item));
});