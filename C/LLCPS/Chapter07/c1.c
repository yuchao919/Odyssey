#include<stdio.h>

struct complex_struct {
	double x, y;
};

struct complex_struct add_complex(struct complex_struct z1, struct complex_struct z2)
{
	z1.x = z1.x + z2.x;
	z1.y = z1.y + z2.y;
	return z1;
}

int main(void)
{
    struct complex_struct z1={0.1, 0.2}, z2={0.3, 0.4};
    add_complex(z1,z2);
    printf("z1.x=%f,z1.y=%f\n", z1.x, z1.y);
    return 0;
}
