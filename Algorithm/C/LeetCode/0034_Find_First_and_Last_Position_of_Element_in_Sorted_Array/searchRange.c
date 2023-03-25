/**
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

Constraints:
    0 <= nums.length <= 105
    -109 <= nums[i] <= 109
    nums is a non-decreasing array.
    -109 <= target <= 109

*/
/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

#include <stdio.h>
#include <stdlib.h>

int *searchRange(int *nums, int numsSize, int target, int *returnSize)
{
    int *result = malloc(2 * sizeof(int));
    result[0] = -1;
    result[1] = -1;
    *returnSize = 2;
    if (numsSize <= 0)
    {
        return result;
    }
    if (numsSize == 1)
    {
        if (nums[0] == target)
        {
            result[0] = 0;
            result[1] = 0;
        }

        return result;
    }

    int pivot, limit = numsSize - 1;
    int low = 0, high = limit, mid;
    // 二分查找到相等的位置
    while (low <= high)
    {
        mid = (low + high) / 2;
        if (nums[mid] == target)
        {
            // 匹配到元素
            result[0] = mid;
            result[1] = mid;
            break;
        }
        else if (nums[mid] > target)
        {
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }
    // 折半超找没找到
    if (result[0] == -1)
    {
        return result;
    }

    // 折半查找找到元素，则开始寻找上下限，先找下限
    // 折半查找一个元素 它等于target，它的前一位还比它小
    pivot = result[0];
    while (low <= pivot)
    {
        mid = (low + pivot) / 2;
        // 最下边界处理
        if (mid == 0)
        {
            if (nums[0] == target)
            {
                result[0] = 0;
            }
            else if (nums[1] == target)
            {
                result[0] = 1;
            }
            else
            {
                result[0] = pivot;
            }

            break;
        }
        // pivot位置的元素始终为target
        if (nums[mid - 1] < target)
        {
            if (nums[mid] == target)
            {
                result[0] = mid;
                break;
            }
            low = mid + 1;
        }
        // 缩小
        else
        {
            pivot = mid - 1;
        }
    }

    pivot = result[1];
    while (pivot <= high)
    {
        mid = (pivot + high) / 2;
        // 上边界处理
        if (mid >= limit)
        {
            if (nums[limit] == target)
            {
                result[1] = limit;
            }
            else if (nums[limit - 1] == target)
            {
                result[1] = limit - 1;
            }
            else
            {
                result[1] = pivot;
            }
            break;
        }
        // pivot位置的元素始终为target
        if (target < nums[mid + 1])
        {
            if (nums[mid] == target)
            {
                result[1] = mid;
                break;
            }
            high = mid - 1;
        }
        // 缩小
        else
        {
            pivot = mid + 1;
        }
    }

    return result;
}

// 折半查找
int BinarySearch(int *L, int len, int key)
{
    int low = 0, high = len - 1, mid;
    while (low <= high)
    {
        // 取中间位置
        mid = (low + high) / 2;
        if (L[mid] == key)
            // 查找成功返回所在的位置
            return mid;
        else if (L[mid] > key)
        { // 从前部分查找
            high = mid - 1;
        }
        else
        {
            // 从后部分查找
            low = mid + 1;
        }
    }
    return -1;
}

int main()
{
    int a[6] = {4, 5, 7, 8, 8, 10};
    int returnSize = 0;

    int b[6] = {5, 7, 7, 8, 8, 10};

    // int position = BinarySearch(a, 6, 6);
    // printf("Position:%d \n", position);

    int *result = searchRange(b, 6, 7, &returnSize);

    printf("result: [%d,%d]\n", result[0], result[1]);

    return 0;
}
