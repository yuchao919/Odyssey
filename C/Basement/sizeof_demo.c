#include <stdio.h>

void demo1()
{
    int a = 10;
    int arr[] = {1, 2, 3};
    char str[] = "hello";
    char *str1 = "hello";
    int len_a = sizeof(a);
    int len_arr = sizeof(arr);
    int len_str = sizeof(str);
    int len_str1 = sizeof(str1);

    printf("len_a=%d,len_arr=%d,len_str=%d,len_str1=%d\n", len_a, len_arr, len_str, len_str1);
    // len_a=4,len_arr=12,len_str=6,len_str1=8
}

void demo2()
{
    int a = 10;
    char b = 'b';
    short c = 2;
    long d = 9;
    float e = 6.29f;
    double f = 95.0629;
    int arr[] = {1, 2, 3};
    char str[] = "hello";
    double *p = &f;
    int *i = &a;
    long j[] = {1, 2, 3};

    //分别对各个变量使用sizeof运算
    printf("a=%d,b=%d,c=%d,d=%d,e=%d,f=%d,arr=%d,str=%d point_p=%d,point_i=%d,point_j=%d\n",
           sizeof(a), sizeof(b), sizeof(c), sizeof(d), sizeof(e), sizeof(f),
           sizeof(arr), sizeof(str), sizeof(p), sizeof(i), sizeof(j));
    //a=4,b=1,c=2,d=8,e=4,f=8,arr=12,str=6 point_p=8,point_i=8,point_j=24
}

int main()
{
    demo1();
    demo2();

    return 0;
}