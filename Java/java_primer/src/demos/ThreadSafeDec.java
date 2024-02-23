package demos;

import models.Counter;

public class ThreadSafeDec extends Thread {

    @Override
    public void run() {
        for (int i = 0; i < 100000; i++) {
            Counter.dec();
        }
    }
}
