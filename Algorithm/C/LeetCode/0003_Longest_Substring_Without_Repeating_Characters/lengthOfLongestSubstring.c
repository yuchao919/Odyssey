/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
			 Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/
#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring_me(char *s)
{
	if (s[0] == '\0')
	{
		return 0;
	}
	int x, y, cur, max;
	x = y = cur = max = 0;
	int dict[128] = {0};
	while (s[y])
	{
		int idx = (int)s[y];
		if (dict[idx] >= x)
		{
			cur = y + 1 - x;
			if (cur > max)
				max = cur;
			x = dict[idx] + 1;
		}
		dict[idx] = y + 1;
		y++;
	}
	cur = y - x + 1;
	if (cur > max)
		max = cur;
	return max;
}

int lengthOfLongestSubstring_0ms(char *s)
{
	short last_char_pos_map[256], i;
	int last_start = 0,
		longest_length = 0,
		len = strlen(s);
	char c;

	for (i = 0; i < 256; i++)
		last_char_pos_map[i] = -1;

	for (i = 0; i < len; i++)
	{
		c = s[i];
		if (last_char_pos_map[c] >= last_start)
		{
			if (i - last_start > longest_length)
				longest_length = i - last_start;
			last_start = last_char_pos_map[c] + 1;
		}
		last_char_pos_map[c] = i;
	}
	if (i - last_start > longest_length)
		longest_length = i - last_start;
	return longest_length;
}

int lengthOfLongestSubstring_eg(char *s)
{

	int i = 0, j = 0, k = 0;
	int str_len = 0, sub_str_len = 0;
	char cur_char = 0;
	int cur_len = 0;

	str_len = strlen(s);

	for (i = 0; i < str_len; i++)
	{
		cur_char = s[i];
		cur_len = 1;
		for (j = k; j < i; j++)
		{

			if (cur_char == s[j])
			{
				k = j + 1;
				break;
			}
			cur_len++;
		}

		if (sub_str_len < cur_len)
		{
			sub_str_len = cur_len;
		}
	}

	return sub_str_len;
}

int main(int argc, char **argv)
{
	char *egs[] = {
		"1234;;",
		"uaau",
		"au",
		"",
		"aa",
		"abcebadc",
		"abcabcbb",
		"bbbbb",
		"pwwkew"};

	for (size_t i = 0, len = sizeof(egs) / sizeof(egs[0]); i < len; i++)
	{
		printf("%s : %d me: %d\n", egs[i], lengthOfLongestSubstring_eg(egs[i]), lengthOfLongestSubstring_me(egs[i]));
	}

	return 0;
}

/*
int i, j, k, max, cur;
	i = j = max = cur = 0;
	int dict[128] = { 0 };
	// 从下表x开始往前找，直至到有重复的字符串，下标y，记录y-x的值，然后下标从y开始，直至末尾
	while (s[++j])
	{
		if (dict[s[j]] == 1)
		{
			cur = j - i;
			if (cur > max)
			{
				max = cur;
			}
			i++;
			j = i;
			for (int k = 0; k < 128; k++)
			{
				dict[k] = 0;
			}
		}
		else
		{
			dict[s[j]] = 1;
		}
	}

	cur = j - i - 1;
	if (cur > max)
	{
		max = cur;
	}

	return max;
*/