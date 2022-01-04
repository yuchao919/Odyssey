/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).

The replacement must be in place and use only constant extra memory.

Example 1:

Input: nums = [1,2,3]
Output: [1,3,2]

Example 2:

Input: nums = [3,2,1]
Output: [1,2,3]

Example 3:

Input: nums = [1,1,5]
Output: [1,5,1]

Example 4:

Input: nums = [1]
Output: [1]

Constraints:
    1 <= nums.length <= 100
    0 <= nums[i] <= 100
*/

#include <stdio.h>

void swap(int *a, int *b)
{
    *a = *a ^ *b;
    *b = *b ^ *a;
    *a = *a ^ *b;
}

void sort(int *nums, int numsSize, int begin)
{
    
}

void nextPermutation(int *nums, int numsSize)
{
    /*
        1、从数组高位到低位，找到第一个递减的数字x，记录下标p
        2、从p再往前找到一个比x大，但是最小的数字，记录下标q，交换p，q
        3、再从p开始一直到数组末尾，进行排序
    */
    int x, y;
    int p, q;
}

int main()
{

    return 0;
}