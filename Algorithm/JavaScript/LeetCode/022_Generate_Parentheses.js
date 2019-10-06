/**
 *  Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *  For example, given n = 3, a solution set is:
 * [
 *   "((()))",
 *   "(()())",
 *   "(())()",
 *   "()(())",
 *   "()()()"
 * ]
 */

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var list = [];
  backtrack(list, '', 0, 0, n);
  return list;
};

function backtrack(list, str, open, close, max) {
  if (str.length == max * 2) {
    list.push(str);
    return;
  }

  if (open < max) backtrack(list, str + '(', open + 1, close, max);
  if (close < open) backtrack(list, str + ')', open, close + 1, max);
}

console.log(generateParenthesis(3));
debugger;

var answers =  {
  one: ['()'],
  two: [
    '(())', //       2112
    '()()' //        2211
  ],
  three: [
    '((()))', //    321123
    '(()())', //    322113
    '(())()', //    322311
    '()(())', //    332112
    '()()()' //     332211
  ],
  four: [
    '(((())))', // 43211234
    '((()()))', // 43221134
    '((())())', // 43223114
    '((()))()', // 43223411
    '(()(()))', // 43321124
    '(()()())', // 43322114
    '(()())()', // 43322411
    '(())(())', // 43342112
    '(())()()', // 43342211
    '()((()))', // 44321123
    '()(()())', // 44322113
    '()(())()', // 44322311
    '()()(())', // 44332112
    '()()()()' //  44332211
  ]
};

1, 2, 5, 14;
function dusbin() {
  // 用递归，结果是对的，但是它非要按照他的顺序来WTF
  var generateParenthesis = function(n) {
    var result = [];

    if (n === 1) {
      return ['()'];
    } else {
      var n_1 = generateParenthesis(n - 1);
      var len = n_1.length;
      for (var i = 0; i < len; ++i) {
        var item = n_1[i];
        result.push('()' + item);
        result.push('(' + item + ')');
        result.push(item + '()');
      }
    }

    var dict = {};
    var res = [];
    for (var i = 0, l = result.length; i < l; i++) {
      var item = result[i];
      if (!dict[item]) {
        res.push(item);
        dict[item] = 1;
      }
    }

    return res;
  };

  var generateParenthesis = function(n) {
    var result = [];

    if (n === 1) {
      return ['()'];
    }

    var n_1 = generateParenthesis(n - 1);
    var len = n_1.length;

    var one = n_1[len - 1];

    for (var i = 0; i < len; ++i) {
      var item = n_1[i];
      result.push('(' + item + ')');
    }

    for (var i = 0; i < len; ++i) {
      var item = n_1[i];
      result.push(item + '()');
      if (item !== one) {
        result.push('()' + item);
      }
    }

    return result;
  };

  var generateParenthesis = function(n) {
    var result = [];
    var dict = {};
    if (n === 1) {
      return ['()'];
    } else {
      var n_1 = generateParenthesis(n - 1);
      var len = n_1.length;

      for (var i = 0; i < len; ++i) {
        var item = [...n_1[i]];
        item.unshift('(');

        for (var j = item.length - 1; j > -1; --j) {
          if (item[j] === '(') {
            var newItem = item.slice();
            newItem.splice(j + 1, 0, ')');
            var ni = newItem.join('');
            if (!dict[ni]) {
              result.push(ni);
              dict[ni] = 1;
            }
          }
        }
      }
    }

    return result;
  };
}
