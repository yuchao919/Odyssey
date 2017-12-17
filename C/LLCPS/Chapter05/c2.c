#include <stdio.h>

int Find_Great_Common_Divisor(int a, int b) {
  int val = a % b;
  if (val)
    return Find_Great_Common_Divisor(b, val);
  else
    return b;
}

int main(void) {
  printf("%d", Find_Great_Common_Divisor(24, 16));
  return 0;
}

