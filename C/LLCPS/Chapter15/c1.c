#include <stdio.h>

int main()
{
    printf("char:%ld\nshort:%ld\nint:%ld\nlong:%ld\nlong long:%ld\nchar point:%ld\nint point:%ld\n",
            sizeof(char),
            sizeof(short),
            sizeof(int),
            sizeof(long),
            sizeof(long long),
            sizeof(char*),
            sizeof(int*));
    /*
     * char:1
     * short:2
     * int:4
     * long:8
     * long long:8
     * char point:8
     * int point:8
     */
    return 0;
}

