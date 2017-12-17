#include<stdio.h>

void PrintSequences(int a[], int num)
{
    int i;
    for( i=0; i< num; ++i)
    {
        printf("%d\t", a[i]);
    }
    printf("\n");
}

int main(void)
{
    int a[3] = { 1, 2, 3 };
    PrintSequences(a, 3);
    return 0;
}
