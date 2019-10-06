/**
 * Divide two integers without using multiplication, division and mod operator.
 * If it is overflow, return MAX_INT.
 */

/**
 * 这题要从C语言考虑，结果是32位的int类型，且MAX_INT=2147483647
 * 解决了，人家最慢200ms，我886ms，笑笑不说话
 * 计算机组成原理里面的除法
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var MAX_INT = 2147483647;
  var MIN_INT = -2147483648;
  if (divisor === 0) {
    return dividend > 0 ? MAX_INT : MIN_INT;
  } else if (divisor === 1) {
    return dividend;
  } else if (divisor === -1) {
    if (dividend === MIN_INT) {
      return MAX_INT;
    }
    return (dividend = ~dividend + 1);
  } else if (divisor === MIN_INT) {
    if (dividend === MIN_INT) {
      return 1;
    }
    return 0;
  }

  var result, times, td, isPositive, isOverflow;
  isOverflow = 0;
  isPositive =
    (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
  if (dividend === MIN_INT) {
    dividend = MAX_INT;
    isOverflow = 1;
  } else if (dividend < 0) {
    dividend = ~dividend + 1;
  }
  if (divisor < 0) {
    divisor = ~divisor + 1;
  }

  if (dividend < divisor) {
    return 0;
  }

  times = isPositive;
  td = divisor;
  result = 0;
  while (td < 1073741824 && td * 2 < dividend) {
    times <<= 1;
    td <<= 1;
  }
  dividend -= td;
  dividend += isOverflow;
  while (dividend >= td) {
    dividend -= td;
    times <<= 1;
  }
  while (dividend > divisor) {
    result += isPositive;
    dividend -= divisor;
  }

  return result + times;
};

var testcase = [
  // [4, 2],
  // [5, 2]
  // [9, 3],
  // [100, 3],
  // [1000, 56],
  // [-2147483648, -1]
  // [-9, 3]
  // [123, 0]
  // [-9, -2]
  // [-53, 33],
  // [-9, -2]
  // [-2147483648, 2],
  // [-2147483648, -2],
  // [-2147483648, 4],
  // [-2147483648, -4],
  // [-2147483648, 3],
  // [-2147483648, -3],
  [-2147483648, -2147483648],
  [2147483647, -2147483648]
];
testcase.forEach(function(item) {
  var res = divide(item[0], item[1]);
  console.log(`${parseInt(item[0] / item[1])} ${res}`);
});

function dustbin(params) {
  var divide = function(dividend, divisor) {
    var MAX_INT = 2147483647;
    var MIN_INT = -2147483648;
    if (divisor === 0) {
      return dividend > 0 ? MAX_INT : MIN_INT;
    }

    if (divisor === 1) {
      return dividend;
    }

    if (divisor === -1) {
      if (dividend === MIN_INT) {
        return MAX_INT;
      }
      return (dividend = ~dividend + 1);
    }

    var result, times, isPositive;
    isPositive =
      (dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0) ? 1 : -1;
    if (dividend < 0) {
      dividend = ~dividend + 1;
    }
    if (divisor < 0) {
      divisor = ~divisor + 1;
    }

    if (dividend < divide) {
      return 0;
    }

    times = isPositive;
    result = 0;

    while (dividend - divisor >= divisor) {
      times <<= 1;
      divisor <<= 1;
    }

    return result;
  };
}
