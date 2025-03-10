package demos;

import java.util.Random;

import utils.Utils;

public class UtilsDemo {
    public static void math() {
        System.out.println(Math.min(1, 2));
    }

    public static void random() {
        Random rnd = new Random();

        System.out.println(rnd.nextInt(100));
        System.out.println(rnd.nextFloat());
    }

    public static void securityRandomShow() {
        for (int i = 0; i < 100; i++) {
            System.out.println(Utils.generateRandomSixDigitString());
        }
    }
}
