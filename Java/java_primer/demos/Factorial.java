package demos;

public class Factorial {

    public static long fact(long n) {
        long r = 1;
        for (int i = 0; i <= n; i++) {
            r = r * i;
        }

        return r;
    }
}
