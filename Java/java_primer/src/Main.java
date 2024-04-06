import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import demos.SuperSimpleHttpServer;

public class Main {
    public static void main(String[] args) throws Exception {
        List<UUID> list = new ArrayList<>();
        UUID a = UUID.fromString("14b10b59-e690-4f43-90a6-a732b6e02a2a");
        UUID b = UUID.fromString("14b10b59-e690-4f43-90a6-a732b6e02a2a");
        list.add(a);
        System.out.println(a == b);
        System.out.println(a.equals(b));
        System.out.println(list.contains(b));
    }
}
