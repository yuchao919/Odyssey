package models;

import java.util.function.IntSupplier;

public class FibonacciSupplier implements IntSupplier {
    int index = 0;
    int p = 0;
    int q = 1;

    @Override
    public int getAsInt() {
        index++;
        if (index <= 1) {
            return 1;
        }
        int result = p + q;
        p = q;
        q = result;
        return result;
        // return fib(++index);
    }

    private int fib(int n) {
        if (n <= 1) {
            return n;
        }

        return fib(n - 1) + fib(n - 2);
    }
}
