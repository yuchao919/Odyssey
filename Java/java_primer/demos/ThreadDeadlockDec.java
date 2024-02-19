package demos;

import models.Counter;

public class ThreadDeadlockDec extends Thread {
    @Override
    public void run() {
        for (int index = 0; index < 10000; index++) {
            synchronized (Counter.lockB) {
                synchronized (Counter.lockA) {
                    Counter.count -= 1;
                }
            }
        }
    }
}
