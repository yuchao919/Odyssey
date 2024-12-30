package demos;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class RegexpDemo {

    private static List<String> getEmailTestcase() {
        List<String> testcaseList = new ArrayList<>();
        testcaseList.add("asdasd@asd.cc");
        testcaseList.add("user@example.com");
        testcaseList.add("user.name+tag+sorting@example.com");
        testcaseList.add("user_name@example.co.uk");
        testcaseList.add("user-name@subdomain.example.com");
        testcaseList.add("user.name@example.com");
        testcaseList.add("user@123.123.123.123");
        testcaseList.add("user@[123.123.123.123]");
        testcaseList.add("user.name@localhost");
        testcaseList.add("user@example.museum");
        testcaseList.add("user@example.name");
        testcaseList.add("user@example.co");
        testcaseList.add("user@example.net");
        testcaseList.add("user@sub.example.com");
        testcaseList.add("user@sub.sub.example.com");
        testcaseList.add("first.last@iana.org");
        testcaseList.add("example@iana.org");
        testcaseList.add("user@iana.org");
        testcaseList.add("info@a.com");
        testcaseList.add("info@1.com");
        testcaseList.add("test@test.com");
        testcaseList.add("customer/department=shipping@example.com");
        testcaseList.add("!#$%&'*+-/=?^_{}|~@example.org`");
        testcaseList.add("test@test.co.in");
        testcaseList.add("test+alias@example.com");
        testcaseList.add("user@xn--bcher-kva.example");
        testcaseList.add("user@domain-with-hyphen.com");
        testcaseList.add("user@domain.name");
        testcaseList.add("user@domain.name.com");
        testcaseList.add("user@sub-domain.com");
        testcaseList.add("valid@special_chars.com");
        testcaseList.add("valid.email@example.com");
        testcaseList.add("valid.email+alias@example.com");
        testcaseList.add("valid_email@sub-domain.example.com");
        testcaseList.add("valid123@numeric.com");
        testcaseList.add("user@sub.domain.com");
        testcaseList.add("user@sub.sub.domain.com");
        testcaseList.add("user@sub-domain.example.com");
        testcaseList.add("user@sub_domain.example.com");
        testcaseList.add("firstname.lastname@example.com");
        testcaseList.add("email@subdomain.example.com");
        testcaseList.add("email@123.123.123.123");
        testcaseList.add("email@subdomain.localhost");
        testcaseList.add("user@sub-domain.example.org");
        testcaseList.add("user@sub_domain.example.org");
        testcaseList.add("user@valid.com");
        testcaseList.add("email@valid.co.uk");
        testcaseList.add("email@valid.ac.in");
        testcaseList.add("email@sub.valid.com");
        testcaseList.add("email@valid-domain.com");
        testcaseList.add("email@valid_domain.com");
        testcaseList.add("plainaddress");
        testcaseList.add("@missingusername.com");
        testcaseList.add("username@.com");
        testcaseList.add("username@com");
        testcaseList.add("username@.com.");
        testcaseList.add("username@subdomain..com");
        testcaseList.add("username@subdomain_com.com");
        testcaseList.add("username@sub..domain.com");
        testcaseList.add("username@sub-.domain.com");
        testcaseList.add("username@.subdomain.com");
        testcaseList.add("username@subdomain-.com");
        testcaseList.add("username@-subdomain.com");
        testcaseList.add("user@.subdomain.com");
        testcaseList.add("user@subdomain..com");
        testcaseList.add("user@subdomain,com");
        testcaseList.add("user@subdomain@domain.com");
        testcaseList.add("user@subdomain@domain");
        testcaseList.add("user@subdomain@domain.co");
        testcaseList.add("user@subdomain@domain.co.uk");
        testcaseList.add("user@subdomain@domain.in");
        testcaseList.add("user@subdomain@domain.ac.in");
        testcaseList.add("user@subdomain@domain.local");
        testcaseList.add("user@subdomain@domain.localhost");
        testcaseList.add("user@subdomain@domain.invalid");
        testcaseList.add("user@subdomain@domain.example");
        testcaseList.add("user@subdomain@domain.test");
        testcaseList.add("user@subdomain@domain.com.invalid");
        testcaseList.add("user@subdomain@domain.com.example");
        testcaseList.add("user@subdomain@domain.com.test");
        testcaseList.add("user@subdomain@domain.com@.com");
        testcaseList.add("user@subdomain@domain.com@.co.uk");
        testcaseList.add("user@subdomain@domain.com@.in");
        testcaseList.add("user@subdomain@domain.com@.ac.in");
        testcaseList.add("user@subdomain@domain.com@.local");
        testcaseList.add("user@subdomain@domain.com@.localhost");
        testcaseList.add("user@subdomain@domain.com@.invalid");
        testcaseList.add("user@subdomain@domain.com@.example");
        testcaseList.add("user@subdomain@domain.com@.test");
        testcaseList.add("user@subdomain@domain.com@.com.invalid");
        testcaseList.add("user@subdomain@domain.com@.com.example");
        testcaseList.add("user@subdomain@domain.com@.com.test");
        testcaseList.add("user@subdomain@domain.com@.co.invalid");
        testcaseList.add("user@subdomain@domain.com@.co.example");
        testcaseList.add("user@subdomain@domain.com@.co.test");
        testcaseList.add("user@subdomain@domain.com@.com@.invalid");
        testcaseList.add("user@subdomain@domain.com@.com@.example");
        testcaseList.add("user@subdomain@domain.com@.com@.test");
        testcaseList.add("user@subdomain@domain.com@.co@.invalid");
        testcaseList.add("user@subdomain@domain.com@.co@.example");
        testcaseList.add("user@subdomain@domain.com@.co@.test");

        return testcaseList;
    }

    public static void run() {
        int index = 1;
        for (String cString : getEmailTestcase()) {
            System.out.println(index++ + ". " + cString + " : " + isValidEmail(cString));
        }
    }

    /**
     * 判断输入的字符串是否是一个合法的邮箱
     *
     * @param input
     * @return
     */
    public static Boolean isValidEmail(String input) {
        // Regular expression pattern for a basic email format
        String regex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(input);
        return matcher.matches();
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
