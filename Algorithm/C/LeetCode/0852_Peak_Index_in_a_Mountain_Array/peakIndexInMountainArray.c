/*
Let's call an array arr a mountain if the following properties hold:

    arr.length >= 3
    There exists some i with 0 < i < arr.length - 1 such that:
        arr[0] < arr[1] < ... arr[i-1] < arr[i]
        arr[i] > arr[i+1] > ... > arr[arr.length - 1]

Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

Example 1:

Input: arr = [0,1,0]
Output: 1

Example 2:

Input: arr = [0,2,1,0]
Output: 1

Example 3:

Input: arr = [0,10,5,2]
Output: 1

Example 4:

Input: arr = [3,4,5,1]
Output: 2

Example 5:

Input: arr = [24,69,100,99,79,78,67,36,26,19]
Output: 2

Constraints:

    3 <= arr.length <= 10^4
    0 <= arr[i] <= 10^6
    arr is guaranteed to be a mountain array.

 
Follow up: Finding the O(n) is straightforward, could you find an O(log(n)) solution?
*/
#include <stdio.h>

// int peakIndexInMountainArray(int* arr, int arrSize){
//     int l = 0, r = arrSize - 1;
//     while(l < r){
//         int m = (l + r) / 2;
//         if(arr[m - 1] < arr[m] && arr[m] > arr[m + 1]) return m;
//         if(arr[m - 1] < arr[m] && arr[m] < arr[m + 1]) l = m + 1;
//         if(arr[m - 1] > arr[m] && arr[m] > arr[m + 1]) r = m;
//     }
//     return l;
// }

int peakIndexInMountainArray(int *arr, int arrSize)
{
    int p = 0, q = arrSize - 1;
    while (1)
    {
        int o = (q - p) / 2 + p;
        int i = o - 1;
        int j = o + 1;
        if (arr[i] < arr[o] && arr[o] > arr[j])
        {
            return o;
        }
        else if (arr[i] < arr[o] && arr[o] < arr[j])
        {
            p = o;
        }
        else if (arr[i] > arr[o] && arr[o] > arr[j])
        {
            q = o;
        }
    }
    return 0;
}

int main()
{
    int a[] = {0, 1, 3, 4, 5, 3, 2};
    printf("%d\n", peakIndexInMountainArray(a, sizeof(a) / sizeof(a[0])));
    return 0;
}