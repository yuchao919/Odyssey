#include <stdio.h>

int main(void)
{
  int a[12];
  printf("sizeof a:%d, sizeof a[0]:%d, sizeof a/sizeof a[0]:%d",
	 sizeof a, sizeof a[0], sizeof a / sizeof a[0]
      );
  return 0;
}
