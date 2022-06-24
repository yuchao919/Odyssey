/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 * Example:
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * Example:
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 初版，未优化 2017-08-02 21:37:41
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  var mh = 0,
    mt = 0,
    h = 0,
    t = 0,
    p = 0,
    len = s.length,
    half = len / 2,
    end = len - 1;

  while (p !== end) {
    h = p;
    t = p + 1;

    if (t > end) {
      break;
    }
    if (s[h] === s[t]) {
      while (s[h] === s[t] && h !== -1 && t !== len) {
        --h;
        ++t;
      }
      ++h;
      --t;
      if (t - h > mt - mh) {
        mh = h;
        mt = t;
      }
    }

    h = p;
    t = p + 2;
    if (t > end) {
      break;
    }
    if (s[h] === s[t]) {
      while (s[h] === s[t] && h !== -1 && t !== len) {
        --h;
        ++t;
      }
      ++h;
      --t;
      if (t - h > mt - mh) {
        mh = h;
        mt = t;
      }
    }
    if (mt - mh > half && p > half) {
      break;
    }
    ++p;
  }
  return s.slice(mh, mt + 1);
};

(function main(params) {
  var testcase = [
    // {Input: "babad", Output: ["bab", "aba"]},
    // {Input: "cbbd", Output: ["bb"]},
    // {Input: "abacecaca", Output: ["aceca"]},
    // {Input: "bb", Output: ["bb"]},
    {Input: "ababababa", Output: ["ababababa"]}
  ];

  var index = 1;
  for (var t of testcase) {
    var output = longestPalindrome(t.Input);
    var result = t.Output.indexOf(output) !== -1;

    console.log(
      result
        ? `true  ${output}`
        : `Error,input: ${t.Input}, output: ${output}, expected: ${t.Output}`
    );
  }
})();

function dustbin(params) {
  //先找偶数型的回文串
  var len = s.length,
    p = Math.ceil(len / 2),
    h = p - 1,
    t = p,
    maxH = h,
    maxT = t;

  if (len === 1) {
    return s;
  }
  while (h > 0) {
    while (condition) {}
  }
  return s.slice(maxH, maxT + 1);
}
