package demos;

import java.util.LinkedList;
import java.util.Queue;

public class QueueDemo {

    public static void run() {
        Queue<String> q = new LinkedList<>();

        q.add("apple");
        q.offer("orange");
        q.add("pear");
        System.out.println(q.peek());

        
    }
}
