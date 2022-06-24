/**
 * Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0?
 * Find all unique triplets in the array which gives the sum of zero.
 * Note: The solution set must not contain duplicate triplets.
 * For example, given array S = [-1, 0, 1, 2, -1, -4],
 * A solution set is:
 *
 * [
 *   [-1, 0, 1],
 *   [-1, -1, 2]
 * ]
 *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var res = [],
    end = nums.length - 2;

  nums = nums.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

  for (var i = 0; i < end; i++) {
    if (nums[i - 1] !== undefined && nums[i - 1] === nums[i]) {
      continue;
    }
    var curr = nums[i];
    var m = i + 1;
    var n = nums.length - 1;

    while (m < n) {
      if (nums[m] + nums[n] + curr === 0) {
        res.push([curr, nums[m], nums[n]]);
        while (m < n && nums[m] === nums[m + 1]) {
          m++;
        }
        while (m < n && nums[n] === nums[n - 1]) {
          n--;
        }
        m++;
        n--;
      } else if (nums[m] + nums[n] + curr > 0) {
        n--;
      } else {
        m++;
      }
    }
  }
  return res;
};

require('./000_Test')(
  [
    // {
    //   input: [0, 0, 0, 0, 1, 1, 1, 1],
    //   expected: [[0, 0, 0]]
    // },
    // {
    //   input: [-1, 0, 1, 2, -1, -4],
    //   expected: [[-1, -1, 2], [-1, 0, 1]]
    // },
    // {
    //   input: [-1, -1, -1, 2],
    //   expected: [[-1, -1, 2]]
    // }
  ],
  threeSum
);

function timeLimitExceeded() {
  var len = nums.length,
    i = 0,
    li = len - 2,
    j = 0,
    lj = len - 1,
    k = 0,
    _nums = {},
    res = [];

  // 枚举出所有可能
  for (i = 0; i < li; ++i) {
    for (j = i + 1; j < lj; ++j) {
      for (k = j + 1; k < len; ++k) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          var elem = [nums[i], nums[j], nums[k]];
          _nums[elem.sort().join(',')] = elem;
        }
      }
    }
  }

  for (var key in _nums) {
    res.push(_nums[key]);
  }
  return res;
}
