package demos;

import models.Counter;

public class ThreadUnsafeAdd extends Thread {

    @Override
    public void run() {
        for (int index = 0; index < 10000; index++) {
            Counter.count += 1;
        }
    }
}
