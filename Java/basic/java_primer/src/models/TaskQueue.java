package models;

import java.util.LinkedList;
import java.util.Queue;

public class TaskQueue {
    Queue<String> queue = new LinkedList<>();

    public synchronized void addTask(String s) {
        this.queue.add(s);
        // Object的实例方法
        this.notifyAll();
    }

    public synchronized String getTask() throws InterruptedException {
        while (queue.isEmpty()) {
            // System.out.println("before wait");
            this.wait();
            // System.out.println("after wait");
        }
        return queue.remove();
    }
}
