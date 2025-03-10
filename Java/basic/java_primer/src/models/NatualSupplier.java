package models;

import java.util.function.Supplier;

public class NatualSupplier implements Supplier<Integer> {
    int n = 0;

    @Override
    public Integer get() {
        n++;
        return Integer.valueOf(n);
    }
}
