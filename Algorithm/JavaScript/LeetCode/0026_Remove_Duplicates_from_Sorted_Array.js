/**
 * Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array,
 * you must do this by modifying the input array in-place with O(1) extra memory.
 * Example:
 * Given nums = [1,1,2],
 * Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
 * It doesn't matter what you leave beyond the new length.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  var pre, cur, q, p, cnt, len;
  len = nums.length;
  pre = nums[0];
  cnt = 1;

  for (q = 1, p = 1; p < len; p++) {
    cur = nums[p];
    if (cur === pre) {
      continue;
    }

    nums[q] = cur;
    pre = cur;
    q++;
    cnt++;
  }

  return cnt;
};

console.log(removeDuplicates([0, 0, 0, 1, 2, 2, 3, 4, 4, 4, 5]));
debugger;
