#include <stdio.h>

int main(int argc, char** argv)
{
	struct {
		char a;
		short b;
		int c;
		char d;
	} s;

	s.a = 1;
	s.b = 2;
	s.c = 3;
	s.d = 4;

    struct  {
        char a;
        char b;
        short c;
        int d;
    } t;

	printf("s:%ld\n", sizeof(s));
    printf("t:%ld\n", sizeof(t));
	return 0;
}
