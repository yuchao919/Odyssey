#include <stdio.h>

#define N 10

int a[N] = { 5, 2, 3, 6, 8, 9, 4, 7, 1, 0 };

int partition(int start, int end)
{
    /*
    	从a[start..end]中选取一个pivot元素（比如选a[start]为pivot）;
	    在一个循环中移动a[start..end]的数据，将a[start..end]分成两半，
    	使a[start..mid-1]比pivot元素小，a[mid+1..end]比pivot元素大，而a[mid]就是pivot元素;
    */
    int pivot = a[start];
    while(start < end)
    {
        while(start < end && a[end] >= pivot) 
            --end;
        a[start] = a[end];
        while(start < end && a[start] <= pivot)
            ++start;
        a[end] = a[start];
    }
    a[end] = pivot;
	return start;
}

void quicksort(int start, int end)
{
	int mid;
	if (end > start) {
		mid = partition(start, end);
		quicksort(start, mid-1);
		quicksort(mid+1, end);
	}
}

int main()
{
    quicksort(0, N-1);
    int i;
    for (i = 0; i < N; ++i)  {
        printf("%d", a[i]);
    }
    return 0;
}
