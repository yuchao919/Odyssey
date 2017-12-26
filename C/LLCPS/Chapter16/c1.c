#include <stdio.h>

int foo()
{
    static int i = 0;
    printf("foo enter %d\n", ++i);
    return 0;
}

int bar()
{
    static int j = 0;
    printf("bar enter %d\n", ++j);
    return 1;

}

int main(void)
{
    int a[] = {1, 2, 3};
    a[foo()] += 1;
    a[bar()] = a[bar()] + 1;
    printf("foo() + bar():\n");
    a[2] = foo() + bar();
    return 0;
}
