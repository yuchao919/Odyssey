#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// int *GetNext(const char *s)
// {
//     int i, j;
//     i = 0;
//     j = -1;
//     int length = strlen(s);
//     int lastIndex = strlen(s) - 1;
//     if (!length)
//     {
//         return 0;
//     }

//     int *next = (int *)malloc(length * sizeof(int));
//     next[0] = -1;
//     while (i < lastIndex)
//     {
//         if (j == -1 || s[i] == s[j])
//         {
//             i++;
//             j++;
//             next[i] = j;
//         }
//         else
//         {
//             j = next[j];
//         }
//     }
//     return next;
// }

int FindIndex(const char *str, const char *subStr)
{
    int i, j, k;
    int len1 = strlen(str), len2 = strlen(subStr);
    int *next;
    if (!len1)
    {
        return -1;
    }

    if (!len2)
    {
        return 0;
    }

    // 初始化next数组
    i = 0;
    j = -1;
    k = len2 - 1;
    next = (int *)malloc(len2 * sizeof(int));
    next[0] = -1;
    while (i < k)
    {
        if (j == -1 || subStr[i] == subStr[j])
        {
            i++;
            j++;
            next[i] = j;
        }
        else
        {
            j = next[j];
        }
    }

    // KMP 算法
    i = 0;
    j = 0;
    while (i < len1 && j < len2)
    {
        if (j == -1 || str[i] == subStr[j])
        {
            i++;
            j++;
        }
        else
        {
            j = next[j];
        }
    }

    free(next);

    if (j >= len2)
        return i - len2;
    else
        return -1;
}

int main()
{
    char str[] = "abcdabce";
    char subStr[] = "abce";
    int index = FindIndex(str, subStr);
    
    if (index != -1)
    {
        printf("substring index: %d\n", index);
    }
    else
    {
        printf("substring not found.\n");
    }

    return 0;
}