package demos;

import java.sql.Timestamp;
import java.util.Base64;

public class TimestampDemo {

    public static void run() {
        Timestamp ts = Timestamp.valueOf("2039-01-24 16:37:10");

        // System.out.println(convertToHexString(ts));
        // System.out.println(decodeBase64Timestamp("ZbDMNg=="));

        System.out.println(convertToBase64Str(ts));
    }

    public static String convertToHexString(Timestamp ts) {
        return convertToTimeSpanString((int) (ts.getTime() / 1000));
    }

    // public static String convertToBase64String(Timestamp ts) {
    // convertToTimeSpanString((int) (ts.getTime() / 1000));
    // }

    private static String convertToTimeSpanString(int objTs) {
        byte[] btTsArray = intToByteBig(objTs);

        String strTimeSpan = "0x" + bytesToHex(btTsArray);
        return strTimeSpan;
    }

    private static byte[] intToByteBig(int n) {
        // int的最大值2147483647,*1000后转换，得到2038年1月。可以用到2038年
        byte[] b = new byte[4];
        b[3] = (byte) (n & 0xff);
        b[2] = (byte) (n >> 8 & 0xff);
        b[1] = (byte) (n >> 16 & 0xff);
        b[0] = (byte) (n >> 24 & 0xff);
        return b;
    }

    private static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02X", b));
        }
        return sb.toString();
    }

    // private static String base64StrToHexString(String version64Str) {
    // // 64进制文本值异常
    // if (version64Str == null || version64Str.isEmpty()) {
    // return "";
    // }

    // byte[] btTsArray = new byte[4];
    // try {
    // Timestamp dt = Timestamp.valueOf(version64Str);
    // int s = (int) (dt.getTime() / 1000);
    // btTsArray = intToByteBig(s);
    // } catch (Exception e) {
    // byte[] bts = Base64.getDecoder().decode(version64Str);
    // if (bts.length >= 4) {
    // btTsArray[3] = bts[bts.length - 1];
    // btTsArray[2] = bts[bts.length - 2];
    // btTsArray[1] = bts[bts.length - 3];
    // btTsArray[0] = bts[bts.length - 4];
    // }
    // }

    // String strTimeSpan = "0x" + bytesToHex(btTsArray);
    // return strTimeSpan;
    // }

    private static String decodeBase64Timestamp(String versionBase64Str) {
        byte[] bytes = Base64.getDecoder().decode(versionBase64Str);
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02X", b));
        }
        return sb.toString();
    }

    private static String convertToBase64Str(Timestamp ts) {
        int n = (int) (ts.getTime() / 1000);
        // 将int转为高字节在前，低字节在后的byte数组（大端）
        byte[] bytes = new byte[4];
        bytes[3] = (byte) (n & 0xff);
        bytes[2] = (byte) (n >> 8 & 0xff);
        bytes[1] = (byte) (n >> 16 & 0xff);
        bytes[0] = (byte) (n >> 24 & 0xff);

        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02X", b));
        }

        return Base64.getEncoder().encodeToString(bytes);
    }

}
