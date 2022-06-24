/**
 * Reverse digits of an integer.
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * click to show spoilers.
 * Have you thought about this?
 *  Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
 * If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
 * Did you notice that the reversed integer might overflow? 
 * Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
 * For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
 * Note:
 * The input is assumed to be a 32-bit signss 
 * 
 * 偷个懒就这么招吧
 * lastEditTime：2017-08-04 09:48:49
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var MIN = -2147483648;
  var MAX = 2147483647;

  var isNegative = x < 0;
  if (isNegative) {
    x *= -1;
  }

  var s = [...x.toString()].reverse();
  var y = parseInt(s.join(""), 10);
  if (isNegative) {
    y *= -1;
  }
  if (y > MAX || y < MIN) {
    y = 0;
  }

  return y;
};

(function main(params) {
  var testcase = [
    {input: 0, expected: 0},
    {input: 123, expected: 321},
    {input: -123, expected: -321},
    {input: 1000000003, expected: 0},
    {input: 10100, expected: 101}
  ];

  for (let t of testcase) {
    let output = reverse(t.input);
    console.log(
      output === t.expected
        ? `Right, ${t.input}`
        : `Error, input: ${t.input}, output: ${output}, expected: ${t.expected}`
    );
  }
})();
