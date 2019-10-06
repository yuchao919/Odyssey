/**
 * Implement regular expression matching with support for '.' and '*'.
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 * The matching should cover the entire input string (not partial).
 * The function prototype should be:
 * bool isMatch(const char *s, const char *p)
 * Some examples:
 * isMatch("aa","a") ? false
 * isMatch("aa","aa") ? true
 * isMatch("aaa","aa") ? false
 * isMatch("aa", "a*") ? true
 * isMatch("aa", ".*") ? true
 * isMatch("ab", ".*") ? true
 * isMatch("aab", "c*a*b") ? true 
 */

/* 
public boolean isMatch(String text, String pattern) {
  if (pattern.isEmpty()) return text.isEmpty();
  boolean first_match = (!text.isEmpty() && 
                         (pattern.charAt(0) == text.charAt(0) || pattern.charAt(0) == '.'));

  if (pattern.length() >= 2 && pattern.charAt(1) == '*'){
      return (isMatch(text, pattern.substring(2)) || 
              (first_match && isMatch(text.substring(1), pattern)));
  } else {
      return first_match && isMatch(text.substring(1), pattern.substring(1));
  }
} 
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (p.length === 0) {
    return s.length === 0;
  }
  var firstMatch = s.length !== 0 && (p[0] === s[0] || p[0] === '.');

  if (p.length >= 2 && p[1] === '*') {
    return (
      isMatch(s, p.substring(2)) || (firstMatch && isMatch(s.substring(1), p))
    );
  } else {
    return firstMatch && isMatch(s.substring(1), p.substring(1));
  }
};

(function main() {
  var testcase = [
    { input: 'aa', pattern: 'a', expected: false },
    { input: 'aa', pattern: 'aa', expected: true },
    { input: 'aaa', pattern: 'aa', expected: false },
    { input: 'aa', pattern: 'a*', expected: true },
    { input: 'aa', pattern: '.*', expected: true },
    { input: 'ab', pattern: '.*', expected: true },
    { input: 'aab', pattern: 'c*a*b', expected: true },
    { input: 'ccccaabbbbbb', pattern: 'c*a*b', expected: false },
    { input: 'ccccaabbbbbb', pattern: 'c*a*b.', expected: false },
    { input: 'ccccaabbbbbb', pattern: 'c*a*b*', expected: true },
    { input: 'ccccaabbbbbb', pattern: 'c*a*b.*', expected: true },
    { input: 'ccccaabbbbbbaszxcewrwqwe', pattern: 'c*a*b.*', expected: true },
    { input: 'aaa', pattern: 'a*a', expected: true },
    { input: 'aaa', pattern: 'a*aa', expected: true },
    { input: 'aaa', pattern: 'ab*a*c*a', expected: true },
    { input: 'abac', pattern: 'a*b*a*c*a', expected: false },
    { input: 'a', pattern: 'ab*', expected: true },
    { input: 'a', pattern: 'ab*a', expected: false },
    { input: 'a', pattern: 'ab*.', expected: false },
    { input: 'asdvvvasd', pattern: 'asd.*asd', expected: true }
  ];

  var test = function(testcase, func) {
    for (let t of testcase) {
      var output = func(t.input, t.pattern);
      if (output === t.expected) {
        console.log(
          `Right; Input: ${t.input}, Pattern: ${t.pattern}, Expected: ${t.expected}`
        );
      } else {
        console.error(
          `Wrong; Input: ${t.input}, Pattern: ${t.pattern}, Output: ${output}, Expected: ${t.expected}`
        );
      }
    }
  };

  test(testcase, isMatch);
})();

/**
  if (p.indexOf('*') === -1 && p.indexOf('.') === -1) {
    return s === p;
  }

  if (p == '.*') {
    return true;
  }

  var pLen = p.length,
    pIndex = 0;

  // 规整p，类似与 a*b*aa 这种，统一去掉后面*号前后一致的元素
  var _p = [],
    _last;
  while (pIndex < pLen) {
    var ch = p[pIndex];
    var isStar = ch === '*';

    if (isStar) {
      _last = _p[_p.length - 1];
    }

    if (_p[_p.length - 1] === '*' && _last === ch) {
      pIndex++;
      continue;
    }

    _p.push(p[pIndex]);
    pIndex++;
  }
  p = _p.join('');

  var sLen = s.length,
    sEnd = sLen - 1,
    sIndex = 0;

  pLen = p.length;
  pIndex = 0;

  while (pIndex < pLen) {
    var patt = p[pIndex],
      isDot = patt === '.',
      hasStar = p[pIndex + 1] === '*',
      ch = sIndex < sLen ? s[sIndex] : s[sEnd];

    if (isDot && hasStar) {
      // .* 直接忽略后面的匹配
      return true;
    }

    if (!hasStar) {
      // 不带*号
      if (!(patt === ch || isDot)) {
        return false;
      }
      ++sIndex;
    } else {
      // 带*号
      while (patt === ch && sIndex < sLen) {
        ++sIndex;
        ch = sIndex === sLen ? s[sEnd] : s[sIndex];
      }
    }

    if (hasStar) {
      pIndex += 2;
    } else {
      pIndex += 1;
    }
  }

  return pIndex === pLen && sIndex === sLen;
 */

/**
  var patt = p[pIndex],
      hasStar = p[pIndex + 1] === '*',
      strOver = sIndex === sLen,
      ch = strOver ? s[sEnd] : s[sIndex];

    if (patt === '.' && hasStar) {
      return true;
    }

    if (strOver) {
      if (hasStar) {
        if (pIndex + 2 < pLen) {
          return false;
        }
      }
    }

    if (!hasStar) {
      if (!(patt === ch || patt === '.')) {
        return false;
      }
      if (!strOver) {
        ++sIndex;
      } else {
      }
    } else {
      while ((patt === ch || patt === '.') && sIndex < sLen) {
        ++sIndex;
        ch = sIndex === sLen ? s[sEnd] : s[sIndex];
      }
    }

    if (hasStar) {
      pIndex += 2;
    } else {
      pIndex += 1;
    }
 */
