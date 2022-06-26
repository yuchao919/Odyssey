/**
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Example 3:

Input: s = ""
Output: 0

Constraints:

    0 <= s.length <= 3 * 104
    s[i] is '(', or ')'.
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  if (!s || typeof s !== 'string') {
    return 0;
  }
  const strLen = s.length;

  let stack = [];
  let max = 0;
  let cnt = 0;
  //
  let h = -1;

  for (let i = 0; i < strLen; i++) {
    const ch = s[i];

    if (ch === '(') {
      stack.push(i);
      cnt++;
      if (h === -1) {
        h = i;
      }
      continue;
    }
    // ch === ')' 的情况
    if (stack.length === 0) {
      if (cnt > max) {
        max = cnt;
      }
      cnt = 0;
      h = -1;
      continue;
    }

    stack.pop();
    cnt++;
  }
  // 已经结束遍历了，如果子字符串已闭环，则直接返回max
  if (stack.length === 0) {
    return cnt > max ? cnt : max;
  }
  // 否则需要判断里面的最大子字符串
  if (cnt <= max) {
    return max;
  }

  tail = strLen;
  while (stack.length > 0) {
    var head = stack.pop();
    cnt = tail - head - 1;
    if (cnt > max) {
      max = cnt;
    }
    tail = head;
  }
  cnt = tail - h;

  return cnt > max ? cnt : max;
};

[
  '(()',
  ')()())',
  //  '',
  ')()()))',
  '()()()()(())',
  '(((())()))(',
  '()()))(((())()))(',
  '))())',
  '(()()()(()',
  '()(',
  '(((('
].forEach((x) => {
  console.log(x);
  console.log(longestValidParentheses(x));
});

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses_best = function (s) {
  let longestRun = 0;
  let openStack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char == '(') {
      openStack.push(i);
    } else {
      if (openStack.length > 0) {
        openStack.pop();
        let currentRunStartIndex = 0;

        if (openStack.length > 0) {
          let previous = openStack.pop();
          currentRunStartIndex = previous + 1;
          openStack.push(previous);
        }
        let currentRun = i - currentRunStartIndex + 1;
        if (currentRun > longestRun) {
          longestRun = currentRun;
        }
      } else {
        let longestSubstringRun = longestValidParentheses_best(s.substring(i + 1));
        if (longestSubstringRun > longestRun) longestRun = longestSubstringRun;
        break;
      }
    }
  }

  return longestRun;
};
