#include <stdio.h>
#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *twoSum(int *nums, int numsSize, int target)
{
    int *result = malloc(sizeof(int) * 2);
    int end = numsSize - 1;
    for (int i = 0; i < end; ++i) {
	for (int j = i + 1; j < numsSize; ++j) {
	    if (nums[i] + nums[j] == target) {
		result[0] = i;
		result[1] = j;
		return result;
	    }
	}
    }
    return result;
}

int main(void)
{

}
