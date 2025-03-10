package demos;

public class StringDemo {
    public static void run() {
        long startTime = System.currentTimeMillis();

        // Call the method you want to measure
        StringPlus();

        long endTime = System.currentTimeMillis();
        long elapsedTime = endTime - startTime;

        System.out.println("Time spent on the StringPlus: " + elapsedTime + " milliseconds");

        startTime = System.currentTimeMillis();

        // Call the method you want to measure
        StringBuilderAppend();

        endTime = System.currentTimeMillis();
        elapsedTime = endTime - startTime;

        System.out.println("Time spent on the StringBuilderAppend: " + elapsedTime + " milliseconds");
    }

    public static void StringPlus() {
        String str = "1";
        for (int i = 0; i < 10000; i++) {
            str = str + "1";
        }
        System.out.println(str.length());
    }

    public static void StringBuilderAppend() {
        StringBuilder sb = new StringBuilder("1");
        for (int i = 0; i < 10000; i++) {
            sb.append("1");
        }
        String str = sb.toString();

        System.out.println(str.length());
    }
}
