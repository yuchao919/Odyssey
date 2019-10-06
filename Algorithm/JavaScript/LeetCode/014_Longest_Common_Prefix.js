/**
 * Write a function to find the longest common prefix string amongst an array of strings. 
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var len = strs.length,
    commonPrefix = [],
    index = 0;
  if (len === 0) {
    return '';
  }
  if (len === 1) {
    return strs[0];
  }
  var c = strs[0][index];
  while (c) {
    for (var i = 1; i < len; i++) {
      if (c !== strs[i][index]) {
        return commonPrefix.join('');
      }
    }
    commonPrefix.push(c);
    c = strs[0][++index];
  }
  return commonPrefix.join('');
};
