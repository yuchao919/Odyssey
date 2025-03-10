package demos;

public class TimeMeasurementDemo {

    public static void run() {
        long startTime = System.currentTimeMillis();

        // Call the method you want to measure
        performTask();

        long endTime = System.currentTimeMillis();
        long elapsedTime = endTime - startTime;

        System.out.println("Time spent on the method: " + elapsedTime + " milliseconds");
    }

    private static void performTask() {
        // The method you want to measure
        for (int i = 0; i < 1000000; i++) {
            // Do some task
        }
    }
}
