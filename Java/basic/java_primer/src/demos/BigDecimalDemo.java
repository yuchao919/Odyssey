package demos;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

public class BigDecimalDemo {

    public static void ZeroPointOne() {
        double x = 1.0 / 10;
        double y = 1 - 9.0 / 10;
        // 观察x和y是否相等:
        System.out.println(x); // 0.1
        System.out.println(y); // 0.09999999999999998
        System.out.println(x == y); // false

        BigDecimal bx = BigDecimal.valueOf(1.0 / 10);
        BigDecimal by = BigDecimal.valueOf(1 - 9.0 / 10);
        System.out.println(bx); // 0.1
        System.out.println(by); // 0.09999999999999998
        System.out.println(Objects.equals(bx, by)); // false
        System.out.println(Objects.equals(bx.setScale(2, RoundingMode.HALF_UP), by.setScale(2, RoundingMode.HALF_UP))); // true

    }
}
