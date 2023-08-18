package com.maven_learning.extension;

import java.math.BigDecimal;
import java.util.UUID;

public class StringExtension {

    /**
     *
     *
     * @param s
     * @return
     */
    public static Integer asInt(String s) {
        if (s == null || s.length() == 0) {
            return null;
        }

        if (s.trim().matches("-?\\d+")) {
            return new Integer(s);
        }
        return null;
    }

    /**
     *
     *
     * @param s
     * @return
     */
    public static BigDecimal asBigDecimal(String s) {
        if (s == null || s.length() == 0) {
            return null;
        }

        if (s.trim().matches("-?\\d+(\\.\\d+)?([Ee][-+]?\\d+)?")) {
            return new BigDecimal(s);
        }
        return null;
    }

    /**
     * 
     * 
     * @param s
     * @return
     */
    public static UUID asUUID(String s) {
        if (s == null || s.length() == 0) {
            return null;
        }
        String regex = "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}";
        if (s.trim().matches(regex)) {
            return UUID.fromString(s);
        }
        return null;
    }

}
