#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	FILE *fp = fopen("abcde", "r");
	if (fp == NULL) {
		perror("Open file abcde");
		exit(1);
	}
	return 0;
}
