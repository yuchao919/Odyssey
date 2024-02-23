package demos;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

public class CollectionDemo {

    public static void IteratorDemo() {
        ArrayList<String> a = new ArrayList<>(Arrays.asList("apple", "pear", "banana"));

        Iterator<String> i = a.iterator();

        for (; i.hasNext();) {
            String str = i.next();
            i.next();
            System.out.println(str);
        }
    }

    public static void createDemo() {
        List<String> list1 = Collections.emptyList();

    }
}
