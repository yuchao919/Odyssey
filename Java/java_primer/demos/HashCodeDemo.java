package demos;

public class HashCodeDemo {

    public static void test() {
        int[] arr = new int[] { "AaAaAa".hashCode(), "BBAaBB".hashCode() };
        for (int i : arr) {
            System.out.println(i);
        }
    }
}
