package demos;

import models.Counter;

public class ThreadDeadlockAdd extends Thread {
    @Override
    public void run() {
        for (int index = 0; index < 10000; index++) {
            synchronized (Counter.lockA) {
                synchronized (Counter.lockB) {
                    Counter.count += 1;
                }
            }
        }
    }
}
