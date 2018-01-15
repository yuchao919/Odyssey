#include <stdio.h>

int main() {
  printf("%d", 1 / 2);
  printf("%d", -1 / 2);
  printf("%d", 17 / 4 + (17 % 4 == 0 ? 0 : 1));
  return 0;
}
