#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    char buffer[200], s[] = "computer", c = 'l';
    int i = 35, j;
    float fp = 1.7320534f;                         //Format and print various data:
    j = sprintf(buffer, "String:%s\n", s);         //C4996
    j += sprintf(buffer + j, "Character:%c\n", c); //C4996
    j += sprintf(buffer + j, "Integer:%d\n", i);   //C4996
    j += sprintf(buffer + j, "Real:%f\n", fp);     //C4996
                                                   //Note:sprintf is deprecated; consider using sprintf_s instead
    printf("Output:\n%s\ncharactercount=%d\n", buffer, j);
}