/**
 * Given an array S of n integers, are there elements a, b, c,
 * and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.
 * Note: The solution set must not contain duplicate quadruplets.
 * For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.
 * A solution set is:
 * [
 *   [-1,  0, 0, 1],
 *   [-2, -1, 1, 2],
 *   [-2,  0, 0, 2]
 * ]
 *
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  var len = nums.length;

  if (len < 4) {
    return [];
  }

  nums = nums.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  });

  var all = {};
  var la = len - 3;
  var lb = len - 2;
  var lc = len - 1;
  var a = 0,
    b = 1,
    c = 2,
    d = 3,
    arrItem = [],
    sum = 0,
    itemKey = '';
  var result = [];
  for (a = 0; a < la; ++a) {
    for (b = a + 1; b < lb; ++b) {
      for (c = b + 1; c < lc; ++c) {
        for (d = c + 1; d < len; ++d) {
          sum = nums[a] + nums[b] + nums[c] + nums[d];
          if (sum > target) {
            break;
          } else if (sum === target) {
            arrItem = [nums[a], nums[b], nums[c], nums[d]];
            itemKey = arrItem.join('|');
            if (!all[itemKey]) {
              all[itemKey] = arrItem;
              result.push(arrItem);
            }
          }
        }
      }
    }
  }
  return result;
};

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));

// fourSum(
//   [
//     -493,
//     -482,
//     -482,
//     -456,
//     -427,
//     -405,
//     -392,
//     -385,
//     -351,
//     -269,
//     -259,
//     -251,
//     -235,
//     -235,
//     -202,
//     -201,
//     -194,
//     -189,
//     -187,
//     -186,
//     -180,
//     -177,
//     -175,
//     -156,
//     -150,
//     -147,
//     -140,
//     -122,
//     -112,
//     -112,
//     -105,
//     -98,
//     -49,
//     -38,
//     -35,
//     -34,
//     -18,
//     20,
//     52,
//     53,
//     57,
//     76,
//     124,
//     126,
//     128,
//     132,
//     142,
//     147,
//     157,
//     180,
//     207,
//     227,
//     274,
//     296,
//     311,
//     334,
//     336,
//     337,
//     339,
//     349,
//     354,
//     363,
//     372,
//     378,
//     383,
//     413,
//     431,
//     471,
//     474,
//     481,
//     492
//   ],
//   6189
// );
