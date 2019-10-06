/**
 * Implement strStr().
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * Example 1:
 *  Input: haystack = "hello", needle = "ll"
 *  Output: 2
 * Example 2:
 *  Input: haystack = "aaaaa", needle = "bba"
 *  Output: -1
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle === '') {
    return 0;
  }

  var q, p, index, hlen, nlen, end;
  index = 0;
  hlen = haystack.length;
  nlen = needle.length;
  end = hlen - nlen + 1;

  while (index < end) {
    if (haystack[index] === needle[0]) {
      for (q = index, p = 0; q < hlen; ++q, ++p) {
        if (haystack[q] !== needle[p]) {
          break;
        }
      }
      if (p === nlen) {
        return index;
      }
    }
    index++;
  }
  return -1;
};

// console.log(strStr('hello', 'lo'));
console.log(strStr('aaaaa', 'bba'));
debugger;
