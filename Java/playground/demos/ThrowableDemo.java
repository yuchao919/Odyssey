package demos;

import java.io.UnsupportedEncodingException;
import java.util.Arrays;

public class ThrowableDemo {

    public static void run() {
        try {
            byte[] bs = toGBK("中文");
            System.out.println(Arrays.toString(bs));
        } catch (UnsupportedEncodingException ex) {
            System.out.println(ex);
        }
    }

    // static byte[] toGBK(String s) {
    // try {
    // // 用指定编码转换String为byte[]:
    // return s.getBytes("GBK");
    // } catch (UnsupportedEncodingException e) {
    // // 如果系统不支持GBK编码，会捕获到UnsupportedEncodingException:
    // System.out.println(e); // 打印异常信息
    // return s.getBytes(); // 尝试使用用默认编码
    // }
    // }

    static byte[] toGBK(String s) throws UnsupportedEncodingException {
        // .\demos\ThrowableDemo.java:25: 错误: 未报告的异常错误UnsupportedEncodingException;
        // 必须对其进行捕获或声明以便抛出
        return s.getBytes("GBK");
    }

    public static void printStackTrace() {
        try {
            process1();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    static void process1() {
        process2();
    }

    static void process2() {
        Integer.parseInt(null); // 会抛出NumberFormatException
    }

}