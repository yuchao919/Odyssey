/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var charDict = {},
    subLength = 0,
    maxLength = 0,
    headPosition = 0,
    currentPosition = 0,
    len = s.length;

  for (; currentPosition < len; currentPosition++) {
    var currentChar = s[currentPosition];
    if (!charDict.hasOwnProperty(currentChar)) {
      charDict[currentChar] = [currentPosition];
      continue;
    }

    subLength = currentPosition - headPosition;
    if (subLength >= maxLength) {
      maxLength = subLength;
    }
    headPosition = Math.max(charDict[currentChar][0] + 1, headPosition);
    charDict[currentChar].unshift(currentPosition);
  }
  subLength = len - headPosition;
  return maxLength > subLength ? maxLength : subLength;
};

/* 
(function() {
  var testStr = [
    { str: "pmukfzdskwdyne", len: 8 },
    { str: "ggububgvfk", len: 6 },
    { str: "tmmzuxt", len: 5 },
    { str: "pwwkew", len: 3 },
    { str: "cdd", len: 2 },
    { str: "dvdf", len: 3 },
    { str: "bbbbbb", len: 1 },
    { str: "abcdefghijklmnopqrstuvwxyz", len: 26 }
  ];
  for (var str of testStr) {
    console.time(str.str);
    var len = lengthOfLongestSubstring(str.str);
    console.timeEnd(str.str);
    if (len !== str.len) {
      console.log(`Error! Output: ${len}, Expected: ${str.len}.`);
    } else {
      console.log(true);
    }
    console.log();
  }
})();
*/

// console.log("abcabcbb:" + lengthOfLongestSubstring("abcabcbb"));
// console.log("dvdf:" + lengthOfLongestSubstring("dvdf"));
// console.log("bbbbb:" + lengthOfLongestSubstring("bbbbb"));
// console.log("pwwkew:" + lengthOfLongestSubstring("pwwkew"));
// console.log(
//   "abcdefghijklmnopqrstuvwxyz:" +
//     lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz")
// );
// console.log(``);

// for (head = 0; head < len; head++) {
//   dict = {};
//   for (p = head; p < len; p++) {
//     var c = s[p];
//     if (dict.hasOwnProperty(c)) {
//       break;
//     } else {
//       dict[c] = p;
//     }
//   }
//   var l = p - head;
//   if (l > maxLength) {
//     maxLength = l;
//   }
//   if (maxLength >= len - head) {
//     return maxLength;
//   }
// }
// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~
// 未通过，不能投机用最长字符串把 time limited

/*
 * 一开始写的那个最后一个用例通不过，超时了。
 * 重点大概是写出o(n)的算法出来。
 * 做了一上午+半个下午。。太水了啊。。。
 * 而且是一次次提交试出来的，完全没有个章法。。
 * 这怎么能行呢
 */