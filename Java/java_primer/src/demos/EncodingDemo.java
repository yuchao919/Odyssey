package demos;

import java.nio.charset.Charset;
import java.util.Base64;

public class EncodingDemo {

    public static void run() throws Exception {
        byte[] b = "中".getBytes("gbk");
        byte[] b8 = "中".getBytes("utf-8");

        byte[] c1 = "cat".getBytes("gbk");
        byte[] c2 = "cat".getBytes("utf-8");

        String b1 = new String(Base64.getEncoder().encode(c1));
        String b2 = new String(Base64.getEncoder().encode(c2));

        System.out.println(Charset.defaultCharset().name());
    }
}
