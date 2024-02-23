package demos;

import models.Counter;

public class ThreadUnsafeDec extends Thread {

    @Override
    public void run() {
        for (int index = 0; index < 10000; index++) {
            Counter.count -= 1;
        }
    }
}
