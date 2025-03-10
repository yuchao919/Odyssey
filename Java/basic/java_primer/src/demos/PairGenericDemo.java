package demos;

import models.Pair;

public class PairGenericDemo {

    public static void run() {
        Pair<Integer> p = new Pair<Integer>(Integer.valueOf("100"), Integer.valueOf("123"));

        int sum = add(p);

        System.out.println(sum);
    }

    //
    public static int add(Pair<? extends Number> p) {
        /*
         * 通过 ? extends 来大道
         */
        Number first = p.getFirst();
        Number second = p.getSecond();

        return first.intValue() + second.intValue();
    }
}
