package demos;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

public class URLCodeDemo {

    public static void run() {
        // encode("中", StandardCharsets.UTF_8);
        String charset = StandardCharsets.UTF_8.name();
        try {
            String zhongCode = URLEncoder.encode("123中a文b！", charset);
            System.out.println(zhongCode);

        } catch (Exception ex) {
            ex.printStackTrace();
        }

    }
}
