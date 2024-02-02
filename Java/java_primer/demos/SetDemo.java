package demos;

import java.util.Set;
import java.util.TreeSet;

public class SetDemo {

    public static void addSameElement() {
        Set<String> hs = new TreeSet<>();

        hs.add("apple");
        hs.add("orange");
        hs.add("apple");
    }
}
