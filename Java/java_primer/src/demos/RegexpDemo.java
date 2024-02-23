package demos;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexpDemo {

    public static void run() {

    }

    public static void line() {
        String re = "learn\\s(java|php|go)";
        System.out.println("learn java".matches(re));
        System.out.println("learn Java".matches(re));
        System.out.println("learn php".matches(re));
        System.out.println("learn Go".matches(re));
    }

    public static boolean isValidMobileNumber(String s) {
        return s.matches("\\d{11}");
    }

    public static void groupMatch() {
        Pattern pattern = Pattern.compile("(\\d{3,4})\\-(\\d{7,8})");
        pattern.matcher("010-12345678").matches();
        pattern.matcher("010-12345678").matches();
        pattern.matcher("022#1234567").matches();
        // 获取Matcher对象
        Matcher matcher = pattern.matcher("010-12345678");
        if (matcher.matches()) {
            String whole = matcher.group(0);
            String area = matcher.group(1);
            String tel = matcher.group(2);
            
            System.out.println(whole);
            System.out.println(area);
            System.out.println(tel);
        }

    }

    public static void greedOrNot() {
        Pattern p1 = Pattern.compile("(\\d+)(0*)");
        Matcher m1 = p1.matcher("1230000");

        if (m1.matches()) {
            System.out.println(m1.group(1));
        }

        Pattern p2 = Pattern.compile("(\\d+?)(0*)");
        Matcher m2 = p2.matcher("1230000");

        if (m2.matches()) {
            System.out.println(m2.group(1));
        }
    }
}
