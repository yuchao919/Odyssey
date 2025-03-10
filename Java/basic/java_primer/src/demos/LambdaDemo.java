package demos;

import java.util.Arrays;
import java.util.Comparator;

import utils.MyStringUtils;

public class LambdaDemo {

    public static void comparatorCase() {
        String[] array = new String[3];
        array[0] = "b";
        array[1] = "d";
        array[2] = "a";
        Arrays.sort(array, new Comparator<String>() {
            public int compare(String s1, String s2) {
                return s1.compareTo(s2);
            }
        });
        System.out.println(String.join(",", array));
    }

    public static void lambdaCase() {
        String[] array = new String[3];
        array[0] = "b";
        array[1] = "d";
        array[2] = "a";
        Arrays.sort(array, (s1, s2) -> {
            return s1.compareTo(s2);
        });
        System.out.println(String.join(",", array));
    }

    public static void lambdaCase2() {
        String[] array = new String[3];
        array[0] = "b";
        array[1] = "d";
        array[2] = "a";
        Arrays.sort(array, MyStringUtils::compare);
        System.out.println(String.join(",", array));
    }

    public static void lambdaCase3() {
        String[] array = new String[3];
        array[0] = "b";
        array[1] = "d";
        array[2] = "a";
        Arrays.sort(array, String::compareTo);
        System.out.println(String.join(",", array));
    }
}
