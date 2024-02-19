package demos;

import models.Counter;

public class ThreadSafeAdd extends Thread {

    @Override
    public void run() {
        for (int i = 0; i < 100000; i++) {
            Counter.add();
        }
    }
}
