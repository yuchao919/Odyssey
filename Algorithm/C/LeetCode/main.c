#include <stdio.h>
#include <stdbool.h>

int main()
{
  printf("hello world");
  _Bool a = (1 == 1);
  bool b = true;
  if (a == b)
  {
    printf("true");
  }

  int i = 2;
  return 0;
}