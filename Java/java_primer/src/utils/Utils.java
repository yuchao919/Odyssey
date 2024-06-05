package utils;
import java.security.SecureRandom;

public class Utils {

    private static final SecureRandom RANDOM = new SecureRandom();

    public static String generateRandomSixDigitString() {
        int randomNumber = 100000 + RANDOM.nextInt(900000); // Generates a random number between 100000 and 999999
        return String.valueOf(randomNumber);
    }
}
