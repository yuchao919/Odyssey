#include <stdio.h>

int main(void)
{
    int a = 0;
    a = (++a)+(++a)+(++a)+(++a);
    printf("%d\n", a);
    return 0;
}
