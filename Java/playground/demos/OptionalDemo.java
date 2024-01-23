package demos;

import java.util.Optional;

public class OptionalDemo {

    public static void run() {
        Optional<String> result = getString(1);
        if (!result.isPresent()) {
            System.out.println(result.get());
        }

    }

    static Optional<String> getString(int i) {
        return Optional.empty();
    }
}
