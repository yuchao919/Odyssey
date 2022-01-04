/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < numsSize) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Example 3:

Input: nums = [1], target = 0
Output: -1

Constraints:

    1 <= numsSize <= 5000
    -10^4 <= nums[i] <= -10^4
    All values of nums are unique.
    nums is guaranteed to be rotated at some pivot.
    -10^4 <= target <= -10^4
*/

#include <stdio.h>

int search(int *nums, int numsSize, int target)
{
    if (numsSize == 0)
    {
        return -1;
    }

    if (numsSize == 1)
    {
        return nums[0] == target ? 0 : -1;
    }
    if (numsSize == 2)
    {
        return nums[0] == target ? 0 : nums[1] == target ? 1
                                                         : -1;
    }

    int lastIndex = numsSize - 1;
    int p = 0;
    int q = lastIndex;
    int mid, pivot;
    // 没rotate的顺序数组，直接二分查找
    if (nums[0] > nums[lastIndex])
    {
        // 找pivot
        while (1)
        {
            mid = (p + q) / 2;
            if (
                mid == 0 ||
                mid == lastIndex ||
                (nums[mid - 1] > nums[mid] && nums[mid] < nums[mid + 1]))
            {
                pivot = mid;
                break;
            }

            if (nums[p] <= nums[mid])
            {
                p = mid + 1;
            }
            else
            {
                q = mid - 1;
            }

            if (
                p != 0 &&
                p != lastIndex &&
                nums[p - 1] > nums[p] &&
                nums[p + 1] > nums[p])
            {
                pivot = p;
                break;
            }

            if (
                q != 0 &&
                q != lastIndex &&
                nums[q - 1] > nums[q] &&
                nums[q + 1] > nums[q])
            {
                pivot = q;
                break;
            }
        }
        // 根据pivot重新二分查找
        if (nums[0] <= target)
        {
            p = 0;
            q = pivot - 1;
        }
        else
        {
            p = pivot;
            q = lastIndex;
        }
    }

    while (p <= q)
    {
        mid = ((p + q) / 2);
        if (nums[mid] == target)
        {
            return mid;
        }
        if (target < nums[mid])
        {
            q = mid - 1;
        }
        else
        {
            p = mid + 1;
        }
    }

    return -1;
}

int main()
{
    int nums[3] = {1, 3, 5};
    printf("%d\n", search(nums, 3, 3));
}