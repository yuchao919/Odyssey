package demos;

public class EqualDemo {

    public static void run() {
        // int i = 1234;
        // int j = 1234;

        // if (i == j) {
        // System.out.println("true");
        // return;
        // }

        // System.out.println("false");
        Integer i = 1;
        Integer j = 1;
        Integer ii = 1234;
        Integer ij = 1234;

        System.out.println(i == j);
        // true

        System.out.println(i.equals(j));
        // true

        System.out.println(ii == ij);
        // false

        System.out.println(ii.equals(ij));
        // true

    }
}