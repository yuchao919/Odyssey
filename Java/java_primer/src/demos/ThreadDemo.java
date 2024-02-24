package demos;

import java.util.ArrayList;

import models.Counter;
import models.TaskQueue;

public class ThreadDemo {

    public static void run() {
        System.out.println("main start...");
        Thread t = new Thread() {
            public void run() {
                System.out.println("thread run...");
                try {
                    Thread.sleep(10);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("thread end.");
            }
        };
        t.start();
        try {
            Thread.sleep(20);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("main end.");
    }

    /**
     * 线程不安全例子
     * 
     * @throws Exception
     */
    public static void ThreadUnsafeDemo() throws Exception {
        ThreadUnsafeAdd add = new ThreadUnsafeAdd();
        ThreadUnsafeDec dec = new ThreadUnsafeDec();
        add.start();
        dec.start();
        add.join();
        dec.join();
        // 由于 count+=1 这种操作涉及 ILoad IADD IStore三条指令，多线程环境下会导致这三条指令并不是一个原子操作
        System.out.println(Counter.count);
    }

    /**
     * 线程死锁
     * 
     * @throws Exception
     */
    public static void ThreadDeadlockDemo() throws Exception {
        ThreadDeadlockAdd add = new ThreadDeadlockAdd();
        ThreadDeadlockDec dec = new ThreadDeadlockDec();
        add.start();
        dec.start();
        add.join();
        dec.join();
        // 两个锁争用，导致最后程序死锁，不会输出结果
        System.out.println(Counter.count);
    }

    /**
     * 线程死锁
     * 
     * @throws Exception
     */
    public static void ThreadSafeDemo() throws Exception {
        ThreadSafeAdd add = new ThreadSafeAdd();
        ThreadSafeDec dec = new ThreadSafeDec();
        add.start();
        dec.start();
        add.join();
        dec.join();
        // 两个锁争用，导致最后程序死锁，不会输出结果
        System.out.println(Counter.count);
    }

    /**
     * 队列协同Demo
     * 
     * @throws Exception
     */
    public static void QueueDemo() throws Exception {
        TaskQueue q = new TaskQueue();
        ArrayList<Thread> ts = new ArrayList<Thread>();
        for (int i = 0; i < 5; i++) {
            final int no = i;
            Thread t = new Thread() {
                public void run() {
                    // 执行task:
                    while (true) {
                        try {
                            String s = q.getTask();
                            System.out.println("Task:" + no + " execute task: " + s);
                            Thread.sleep((int) (Math.random() * 1000));
                        } catch (InterruptedException e) {
                            return;
                        }
                    }
                }
            };
            t.start();
            ts.add(t);
        }
        Thread add = new Thread(() -> {
            for (int i = 0; i < 10; i++) {
                // 放入task:
                String s = "t-" + Math.random();
                System.out.println("add task: " + s);
                q.addTask(s);
                // System.out.println("add task: " + s + " finished");
                try {
                    Thread.sleep(100);
                } catch (InterruptedException e) {
                }
            }
        });
        add.start();
        add.join();
        Thread.sleep(100);
        for (Thread t : ts) {
            t.interrupt();
        }
    }
}
