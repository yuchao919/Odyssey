/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Example 3:

Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000

Example 4:

Input: nums1 = [], nums2 = [1]
Output: 1.00000

Example 5:

Input: nums1 = [2], nums2 = []
Output: 2.00000

Constraints:

    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -10^6 <= nums1[i], nums2[i] <= 10^6


*/

#include <stdio.h>

double findMedianSortedArrays_answer(int *nums1, int nums1Size, int *nums2, int nums2Size)
{
    int totalLength = nums1Size + nums2Size;
    int i1 = 0;
    int i2 = 0;
    int isN1Empty = nums1Size == 0;
    int isN2Empty = nums2Size == 0;
    int curN;
    int lastN;
    int mid = totalLength / 2;
    while (i1 + i2 <= mid)
    {
        if (i1 != 0 || i2 != 0)
        {
            lastN = curN;
        }

        int ele1 = i1 == nums1Size ? 0 : nums1[i1];
        int ele2 = i2 == nums2Size ? 0 : nums2[i2];

        if (isN1Empty || i1 == nums1Size)
        {
            curN = ele2;
            i2++;
        }
        else if (isN2Empty || i2 == nums2Size)
        {
            curN = ele1;
            i1++;
        }
        else if (ele1 < ele2)
        {
            curN = ele1;
            i1++;
        }
        else
        {
            curN = ele2;
            i2++;
        }
    }
    return totalLength % 2 == 0 ? (curN + lastN) / 2.0 : curN;
}

double findMedianSortedArrays_fastest(int *nums1, int nums1Size, int *nums2, int nums2Size)
{
    int midSize = (nums1Size + nums2Size) / 2;
    _Bool a = !((nums1Size + nums2Size) % 2); // 偶数长度
    int i = 0;
    int j = 0;

    int preMid;
    int mid;
    while (i < nums1Size && j < nums2Size && i + j <= midSize)
    {
        int num = nums1[i] <= nums2[j] ? nums1[i++] : nums2[j++];

        if (a && i + j == midSize)
            preMid = num;

        if (i + j == midSize + 1)
            mid = num;
    }

    while (i < nums1Size && i + j <= midSize)
    {
        if (a && i + j == midSize - 1)
            preMid = nums1[i];
        if (i + j == midSize)
            mid = nums1[i];
        i++;
    }

    while (j < nums2Size && i + j <= midSize)
    {
        if (a && i + j == midSize - 1)
            preMid = nums2[j];
        if (i + j == midSize)
            mid = nums2[j];
        j++;
    }

    if (a)
    {
        return (double)(preMid + mid) / 2.0;
    }
    else
    {
        return (double)mid;
    }
}

double findMedianSortedArrays_t1(int *nums1, int nums1Size, int *nums2, int nums2Size)
{
    // 1. 先处理其中一个数组为空的情况
    if (nums1Size == 0)
    {
        return nums2Size % 2 == 0 ? (nums2[nums2Size / 2] + nums2[nums2Size / 2 - 1]) / 2.0 : nums2[nums2Size / 2];
    }
    if (nums2Size == 0)
    {
        return nums1Size % 2 == 0 ? (nums1[nums1Size / 2] + nums1[nums1Size / 2 - 1]) / 2.0 : nums1[nums1Size / 2];
    }

    int m1 = nums1Size / 2, m2 = nums2Size / 2, l1 = nums1Size - 1, l2 = nums2Size - 1, isEven = (nums1Size + nums2Size) & 1 == 0;
    while (nums1[m1] != nums2[m2])
    {
        // 到达数组边界则停止比较
        if (m1 == 0)
        {
            // n1+n2为奇数个，返回
        }
        if (m1 == l1)
        {
            /* code */
        }
        if (m2 == 0)
        {
            /* code */
        }
        if (m2 == l2)
        {
            /* code */
        }

        if (nums1[m1] > nums2[m2])
        {
            m1 = m1 / 2;
            m2 = (m2 + l2) / 2;
        }
        else
        {
            m2 = m2 / 2;
            m1 = (m1 + l1) / 2;
        }
    }
    // 两个中位相等则即为所求
    return nums1[m1];
}

void find(int *nums1, int *h1, int *t1, int *nums2, int *h2, int *t2)
{
    int l1 = (*t1 - *h1);
    int l2 = (*t2 - *h2);
    int m1 = l1 + *h1;
    int m2 = l2 + *h2;
    if (nums1[m1] == nums2[m2])
    {
        *h1 = m1;
        *t1 = m1;
        *h2 = m2;
        *t2 = m2;
        return;
    }
}

// double findMedianSortedArrays_answer(int *nums1, int nums1Size, int *nums2, int nums2Size)
// {
//     int totalLength = nums1Size + nums2Size;
//     int i1 = 0;
//     int i2 = 0;
//     int isN1Empty = nums1Size == 0;
//     int isN2Empty = nums2Size == 0;
//     int curN;
//     int lastN;
//     int mid = totalLength / 2;
//     while (i1 + i2 <= mid)
//     {
//         if (i1 != 0 || i2 != 0)
//         {
//             lastN = curN;
//         }

//         int ele1 = i1 == nums1Size ? 0 : nums1[i1];
//         int ele2 = i2 == nums2Size ? 0 : nums2[i2];

//         if (isN1Empty || i1 == nums1Size)
//         {
//             curN = ele2;
//             i2++;
//         }
//         else if (isN2Empty || i2 == nums2Size)
//         {
//             curN = ele1;
//             i1++;
//         }
//         else if (ele1 < ele2)
//         {
//             curN = ele1;
//             i1++;
//         }
//         else
//         {
//             curN = ele2;
//             i2++;
//         }
//     }
//     return totalLength % 2 == 0 ? (curN + lastN) / 2.0 : curN;
// }

int main(int argc, char **agrv)
{
    int n1[4] = {1, 2, 5, 6};
    int n2[2] = {3, 4};

    printf("%.2f\n", findMedianSortedArrays_fastest(n1, 4, n2, 2));

    return 0;
}

// int p1 = 0, p2 = 0, mid = (nums1Size + nums2Size) / 2;
