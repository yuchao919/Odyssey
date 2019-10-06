/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 * Some hints:
 * Could negative integers be palindromes? (ie, -1)
 * If you are thinking of converting the integer to string, note the restriction of using extra space.
 * You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", 
 * you know that the reversed integer might overflow. How would you handle such case?
 * There is a more generic way of solving this problem.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  var s = x.toString();
  var h = 0,
    t = s.length - 1;

  while (h < t) {
    if (s[h] !== s[t]) {
      return false;
    }
    ++h;
    --t;
  }
  return true;
};

(function main() {
  var testcase = [
    {input: 0, expected: true},
    {input: -2147447412, expected: false},
    {input: 121, expected: true},
    {input: 123, expected: false}
  ];

  var test = function(testcase, func) {
    for (let t of testcase) {
      var output = func(t.input);
      console.log(
        output === t.expected
          ? `Right ${t.input}`
          : `Wrong. Input: ${t.input}, Output: ${output}, Expected: ${t.expected}`
      );
    }
  };

  test(testcase, isPalindrome);
})();
