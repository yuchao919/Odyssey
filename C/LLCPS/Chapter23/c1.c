#include <stdio.h>  

int main(void)
{
    int i, j;
    int *p, *q;
    i=10;
    j=99;
    p=&i;
    q=p;
    p=&j;
    printf("%d", *q);


    return 0;
}
