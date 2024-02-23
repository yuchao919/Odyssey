package demos;

import java.util.Arrays;

import models.PersonComparable;

public class GenericDemo {

    public static void run() {
        PersonComparable[] persons = new PersonComparable[] {
                new PersonComparable("aa"),
                new PersonComparable("cc"),
                new PersonComparable("bb"),
        };
        Arrays.sort(persons);
        System.out.println(Arrays.toString(persons));
    }
}
