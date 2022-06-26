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

struct ListNode
{
    int val;
    char ch;
    double x;
    struct ListNode *next;
};

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

    struct ListNode listNode;

    listNode.val = 100;
    listNode.ch = 'c';

    //分别对各个变量使用sizeof运算
    // printf("a=%d,b=%d,c=%d,d=%d,e=%d,f=%d,arr=%d,str=%d point_p=%d,point_i=%d,point_j=%d\n",
    //        sizeof(a), sizeof(b), sizeof(c), sizeof(d), sizeof(e), sizeof(f),
    //        sizeof(arr), sizeof(str), sizeof(p), sizeof(i), sizeof(j));
    // a=4,b=1,c=2,d=8,e=4,f=8,arr=12,str=6 point_p=8,point_i=8,point_j=24

    printf("size of int a: %d\n", sizeof(a));
    printf("size of char b : %d\n", sizeof(b));
    printf("size of short c : %d\n", sizeof(c));
    printf("size of long d : %d\n", sizeof(d));
    printf("size of float e : %d\n", sizeof(e));
    printf("size of double f : %d\n", sizeof(f));
    printf("size of int arr[] = {1, 2, 3} : %d\n", sizeof(arr));
    printf("size of char str[] = \"hello\" : %d\n", sizeof(str));
    printf("size of double *p : %d\n", sizeof(p));
    printf("size of int *i : %d\n", sizeof(i));
    printf("size of long j[] = {1, 2, 3} : %d\n", sizeof(j));
    printf("\n");
    printf("size of int : %d\n", sizeof(int));
    printf("size of int * : %d\n", sizeof(int *));
    printf("\n");
    printf("size of struct ListNode listNode: %d \n", sizeof(listNode));
    printf("size of struct ListNode: %d \n", sizeof(struct ListNode));
    printf("size of struct ListNode *: %d \n", sizeof(struct ListNode *));

    printf("\n");

    /*

        size of char b : 1
        size of short c : 2
        size of long d : 8
        size of float e : 4
        size of double f : 8
        size of int arr[] = {1, 2, 3} : 12
        size of char str[] = "hello" : 6
        size of double *p : 8
        size of int *i : 8
        size of long j[] = {1, 2, 3} : 24

        size of int : 4
        size of int * : 8

        size of struct ListNode listNode: 24
        size of struct ListNode: 24
        size of struct ListNode *: 8

    */
}

int main()
{
    // demo1();
    demo2();

    return 0;
}

/**
结论:
    1、sizeof里面用类型或者变量等于相同的值
    2、所有指针类型的都是8字节（64位系统）
    3、sizeof 结构体会将里面所有的变量size大小累加起来
    4、sizeof 数组 得出 类型大小*元素个数
*/