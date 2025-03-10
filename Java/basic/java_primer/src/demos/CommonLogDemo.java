package demos;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

public class CommonLogDemo {

    public static void run() {
        Log log = LogFactory.getLog(CommonLogDemo.class);
        log.info("start...");
        log.warn("end.");
    }
}
