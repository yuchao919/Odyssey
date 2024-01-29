import java.math.BigDecimal;

public class Program {
    public static void main(String[] args) {
        Integer a = Integer.valueOf(101);

        Integer b = null;
        if (a == b) {
            System.out.println("equal");
        }
        BigDecimal d = BigDecimal.valueOf(a);

        System.out.println(d);
    }
}
