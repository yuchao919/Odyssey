#include <stdio.h>
int main(void)
{
	char *p = "abcd";
	*p = 'A';
    printf(p);
    return 0;
}
