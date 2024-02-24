package models;

public class Counter {
    public static final Object lockA = new Object();
    public static final Object lockB = new Object();
    public static int count = 0;

    public static synchronized void add() {
        count += 1;
    }

    public static synchronized void dec() {
        count -= 1;
    }
}
