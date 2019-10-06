/**
 * Given a digit string, return all possible letter combinations that the number could represent.
 * A mapping of digit to letters (just like on the telephone buttons) is given below.
 *
 * 1   2   3
 * 4   5   6
 * 7   8   9
 * *   0   #
 *
 * Input:Digit string "23"
 * Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 * Note:
 * Although the above answer is in lexicographical order, your answer could be in any order you want.
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  var dict = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  };

  var result = [];
  var len = digits.length;

  for (var i = 0; i < len; ++i) {
    var letters = dict[digits[i]];
    var len2 = letters.length; // current letters length
    var clen = result.length; // current result length

    if (clen === 0) {
      for (var k = 0; k < len2; ++k) {
        result.push(letters[k]);
      }
    } else {
      var temp = result;
      result = [];

      for (var j = 0; j < clen; j++) {
        for (k = 0; k < len2; ++k) {
          result.push(temp[j] + letters[k]);
        }
      }
    }
  }
  return result;
};

console.log(letterCombinations('23'));
