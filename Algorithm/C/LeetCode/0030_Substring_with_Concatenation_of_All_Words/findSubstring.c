/*
You are given a string s and an array of strings words of the same length. Return all starting indices of substring(s) in s that is a concatenation of each word in words exactly once, in any order, and without any intervening characters.

You can return the answer in any order.

Example 1:

Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.

Example 2:

Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []

Example 3:

Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]


Constraints:

    1 <= s.length <= 104
    s consists of lower-case English letters.
    1 <= words.length <= 5000
    1 <= words[i].length <= 30
    words[i] consists of lower-case English letters.
*/

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

#include <stdio.h>
#include <string.h>
int *findSubstring(char *s, char **words, int wordsSize, int *returnSize)
{
    
}

int main()
{
    // char *s1 = "hello";
    // char s2[10] = "hello";
    char s3[] = "hello";
    // printf("sizeof(%s):%d\n", s1, sizeof(s1));
    // printf("sizeof(*s1):%d\n", sizeof(*s1));
    // printf("sizeof(%s):%d\n", s2, sizeof(s2));
    printf("sizeof(s3[]=\"hello\"):%d\n", sizeof(s3)); // 6

    // s1++;
    // char *s2 = "ello";
    // // printf("%s\n", s1);
    // if (strcmp(s1, s2) == 0)
    // {
    //     printf("true");
    // }
}