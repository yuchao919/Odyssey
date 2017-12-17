    #include <stdio.h>  
    #define N 4  
    /*数组定义为全局变量，方便操作*/  
    int a[N];  
    /*print函数，用来输出数组顺序值，一次print就是一种排列*/  
     void print()  
    {  
        int i;  
        for(i = 0; i < N; i++)  
        {  
            printf("%d ",a[i]);  
        }  
        printf("\n");  
    }  
    /*swap函数，交换下标为 i 和 offset 的数组元素*/  
     void swap(int i,int sub)  
    {  
        int temp;  
        temp = a[sub];  
        a[sub] = a[i];  
        a[i] = temp;  
    }  
    /*递归实现全排列，这里我们先不考虑数组中有相同数字的情况*/  
     void pailie(int sub)  
    {     
        int temp,i=0;  
        if(sub == N-1) //下标指到最后一个数组元素，便输出当前序列  
        {  
            print();  
            return;  
        }  
        else  
        {  
            for(i = sub; i < N; ++i) //根据题目思路进行交换并递归解决其余问题  
            {  
                swap(i, sub);  
                pailie(sub + 1); //递归就是假设pailie函数已经实现了，然后用它去解决剩余的事情  
                swap(i, sub); //再换回来  
            }  
        }  
    }  
      
    int main(void)  
    {  
        int i;  
        for(i=0;i<N;i++)  
        {  
            a[i] = i+1;  
        }  
        pailie(0);    
      
        return 0;  
      
    }  
