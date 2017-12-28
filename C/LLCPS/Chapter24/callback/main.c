/* main.c */
#include <stdio.h>
#include "para_callback.h"

void say_hello(void *str)
{
     printf("Hello %s\n", (const char *)str);
}

void count_numbers(void *num)
{
     int i;
     for(i=1; i<=(int)num; i++)
	  printf("%d ", i);
     putchar('\n');
}

void times_tow(void *a)
{
    int *arr = (const int *)a;
    printf("%d\n", arr[0] * 2);
}

int main(void)
{
     repeat_three_times(say_hello, "Guys");
     repeat_three_times(count_numbers, (void *)4);

     int a[] = {3};
     repeat_three_times(times_tow, a);

     return 0;
}
