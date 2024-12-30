package demos;

public class ParamDemo {

    public static void run() {
        ThreePointParameter("123", 1, 2, 3);
    }

    public static void ThreePointParameter(String str, Object... args) {
        System.out.println(str);
    }
}
