/*
A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59). 
Each LED represents a zero or one, with the least significant bit on the right.

    For example, the below binary watch reads "4:51".

Given an integer turnedOn which represents the number of LEDs that are currently on, return all possible times the watch could represent. 
You may return the answer in any order.

The hour must not contain a leading zero.

    For example, "01:00" is not valid. It should be "1:00".

The minute must be consist of two digits and may contain a leading zero.

    For example, "10:2" is not valid. It should be "10:02".

 

Example 1:

Input: turnedOn = 1
Output: ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]

Example 2:

Input: turnedOn = 9
Output: []

 

Constraints:

    0 <= turnedOn <= 10
*/
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char **readBinaryWatch1(int turnedOn, int *returnSize)
{
    *returnSize = 0;
    if (turnedOn < 0 || turnedOn > 8)
    {
        return (char **)malloc(0);
    }

    char **res;
    int cnt = 0;
    int hour, minute, len;
    int i, j, p, q, o;

    int h0[] = {0};              // 1
    int h1[] = {1, 2, 4, 8};     // 4
    int h2[] = {3, 5, 9, 6, 10}; // 5
    int h3[] = {7, 11};          // 2

    int m0[] = {0};                                                                             // 1
    int m1[] = {1, 2, 4, 8, 16, 32};                                                            // 6
    int m2[] = {3, 5, 9, 17, 33, 6, 10, 18, 34, 12, 20, 36, 24, 40, 48};                        // 15 C6-2
    int m3[] = {7, 11, 19, 35, 13, 21, 37, 25, 41, 49, 14, 22, 38, 26, 42, 50, 28, 44, 52, 56}; // 20 C6-3 = 6*5*4/(3*2)=20
    int m4[] = {15, 23, 39, 27, 43, 51, 29, 45, 53, 57, 30, 46, 54, 58};                        // 14 C6-4 = 6*5*4*3/(4*3*2)=15
    int m5[] = {31, 47, 55, 59};                                                                // 4 C6-5 = 6

    int *h[4] = {h0, h1, h2, h3};
    int *m[6] = {m0, m1, m2, m3, m4, m5};

    int hSize[] = {1, 4, 5, 2};
    int mSize[] = {1, 6, 15, 20, 14, 4};

    for (i = 0; i < 4; i++)
    {
        for (j = 0; j < 6; j++)
        {
            if (i + j != turnedOn)
            {
                continue;
            }
            *returnSize += hSize[i] * mSize[j];
        }
    }

    res = (char **)malloc((*returnSize) * sizeof(char *));

    for (i = 0; i < 4; i++)
    {

        for (j = 0; j < 6; j++)
        {
            if (i + j != turnedOn)
            {
                continue;
            }
            for (p = 0; p < hSize[i]; p++)
            {
                for (q = 0; q < mSize[j]; q++)
                {
                    o = 0;
                    hour = h[i][p];
                    minute = m[j][q];
                    len = hour < 10 ? 5 : 6;
                    res[cnt] = malloc(sizeof(char) * len);
                    snprintf(res[cnt], len, "%d:%.2d", hour, minute);
                    cnt++;
                }
            }
        }
    }

    return res;
}

// int hammingWeight(int n)
// {
//     int result = 0;
//     while (n)
//     {
//         result += n & 1;
//         n >>= 1;
//     }
//     return result;
// }

char **readBinaryWatch(int turnedOn, int *returnSize)
{
    int hour, minute;
    int h, m, n;
    *returnSize = 0;
    char **res = (char **)calloc(250, sizeof(char *));
    for (hour = 0; hour < 12; hour++)
    {
        h = 0;
        n = hour;
        while (n)
        {
            h += n & 1;
            n >>= 1;
        }
        for (minute = 0; minute < 60; minute++)
        {
            m = 0;
            n = minute;
            while (n)
            {
                m += n & 1;
                n >>= 1;
            }
            if (h + m == turnedOn)
            {
                res[*returnSize] = (char *)calloc(6, sizeof(char));
                snprintf(res[*returnSize], 6, "%d:%.2d", hour, minute);
                ++(*returnSize);
            }
        }
    }
    return res;
}

int main()
{
    int returnSize = 0;
    int i, j;
    char **result;
    for (i = 0; i < 11; i++)
    {
        result = readBinaryWatch(i, &returnSize);
        for (j = 0; j < returnSize; j++)
        {
            printf("%s ", result[j]);
        }
        free(result);
        printf("\n\n\n");
    }

    return 0;
}

// int m4
// 1 + 2 + 4 + 8 = 15
// 1 + 2 + 4 + 16 = 23
// 1 + 2 + 4 + 32 = 39
// 1 + 2 + 8 + 16 = 27
// 1 + 2 + 8 + 32 = 43
// 1 + 2 + 16 + 32 = 51
// 1 + 4 + 8 + 16 = 29
// 1 + 4 + 8 + 32 = 45
// 1 + 4 + 16 + 32 = 53
// 1 + 8 + 16 + 32 = 57
// 2 + 4 + 8 + 16 = 30
// 2 + 4 + 8 + 32 = 46
// 2 + 4 + 16 + 32 = 54
// 2 + 8 + 16 + 32 = 58
// 4 + 8 + 16 + 32 = 60

/*
    switch (turnedOn)
    {
    case 0:
        *returnSize = 1 * 1;
        res[0] = "0:00";
        return;
    case 1:
        *returnSize = 1 * 6 + 4 * 1;
        res[0] = "0:01";
        res[1] = "0:02";
        res[2] = "0:04";
        res[3] = "0:08";
        res[4] = "0:16";
        res[5] = "0:32";
        res[6] = "1:00";
        res[7] = "2:00";
        res[8] = "4:00";
        res[9] = "8:00";
        return;
    case 2:
        *returnSize = 1 * 15 + 4 * 6 + 5 * 1;
        res = (char **)malloc(sizeof(char *));
        res[0] = "0:03";
        res[1] = "0:05";
        res[2] = "0:09";
        res[3] = "0:08";
        res[4] = "0:17";
        res[5] = "0:33";
        res[6] = "0:06";
        res[7] = "0:06";
        res[8] = "0:10";
        res[9] = "0:18";
        res[10] = "0:34";
        return;
    case 3:
        *returnSize = 1 * 20 + 4 * 15 + 5 * 6 + 2 * 1;
        break;
    case 4:
        *returnSize = 1 * 14 + 4 * 20 + 5 * 15 + 2 * 6;
        break;
    case 5:
        *returnSize = 1 * 4 + 4 * 14 + 5 * 20 + 2 * 15;
        break;
    case 6:
        *returnSize = 4 * 15 + 5 * 14 + 2 * 20;
        break;
    case 7:
        *returnSize = 5 * 4 + 2 * 14;
        break;
    case 8:
        *returnSize = 2 * 4;
        break;
    case 9:
        *returnSize = 0;
        break;
    default:
        break;
    }

*/