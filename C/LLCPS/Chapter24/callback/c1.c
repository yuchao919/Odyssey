#include <stdio.h>

typedef int (*callback)(int);

int times_two(int i)
{
    return i * 2;
}

int compute(callback cb, int arg)
{
    return cb(arg);
}


int main(void)
{
    printf("%d\n", compute(times_two, 100));
    return 0;
}
