package demos;

import models.Outer;

public class OuterInnerDemo {

    public static void run() {
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
    }
}
