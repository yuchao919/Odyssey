/**
 * Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. 
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 *    For example, given array S = {-1 2 1 -4}, and target = 1.
 *    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums == null || nums.length < 3) {
    return 0;
  }
  nums.sort((a, b) => {
    return a > b ? 1 : a === b ? 0 : -1;
  });
  var len = nums.length;
  var end = len - 2;
  var closestDist = Number.MAX_SAFE_INTEGER;
  var ret = nums[0] + nums[1] + nums[len - 1];

  for (var i = 0; i < end; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    var l = i + 1,
      r = len - 1;
    while (l < r) {
      var sum = nums[i] + nums[l] + nums[r];
      if (sum < target) {
        if (target - sum < closestDist) {
          closestDist = target - sum;
          ret = sum;
        }
        l++;
      } else if (sum > target) {
        if (sum - target < closestDist) {
          closestDist = sum - target;
          ret = sum;
        }
        r--;
      } else {
        //when sum == target, return sum.
        return sum;
      }
    }
  }
  return ret;
};

threeSumClosest([1, 1, 1, 0], 100);
