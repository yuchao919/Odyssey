package com.maven_learning;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

public class UUIDDemo {

    public static void uuidDemo() {
        UUID u1 = UUID.fromString("eb2f1300-e8f7-4040-a4eb-4492dcf04fbc");
        UUID u2 = UUID.fromString("eb2f1300-e8f7-4040-a4eb-4492dcf04fbc");

        boolean equal = u1.equals(u2);

        System.out.println(equal);

        UUID u3 = UUID.fromString("1df232cd-ab56-4e41-bf51-10533e14f40d");
        // System.out.println(u1 == u2);
        // System.out.println(Objects.equals(u1, u2));

        Map<UUID, String> h1 = new HashMap<>();
        h1.put(u1, "A");

        List<UUID> list = new ArrayList<>();
        list.add(u1);
        list.add(u2);
        list.add(u3);

        list.removeIf(x -> Objects.equals(x, UUID.fromString("eb2f1300-e8f7-4040-a4eb-4492dcf04fbc")));

        // List<Integer> aa = Arrays.asList(1, 2, 3);

        System.out.println(list.size());

        System.out.println(u1.hashCode());
        System.out.println(u2.hashCode());
        System.out.println(h1.containsKey(u2));

        String s1 = "eb2f1300-e8f7-4040-a4eb-4492dcf04fbc";
        String s2 = "eb2f1300-e8f7-4040-a4eb-4492dcf04fbc";
        System.out.println(s1 == s2);
        System.out.println(Objects.equals(s1, s2));

        UUID us1 = UUID.fromString(s1);
        UUID us2 = UUID.fromString(s2);

        System.out.println(us1 == us2);
        System.out.println(Objects.equals(us1, us2));

        BigDecimal a = null;
        BigDecimal b = new BigDecimal(0.5);
        if (Objects.isNull(a)) {
            a = BigDecimal.ZERO;
        }
        if (!Objects.isNull(a)) {
            a = a.add(b);
        }

        System.out.println(a);
        System.out.println(BigDecimal.ZERO);

        Integer i = 1;

        // System.out.println();

        System.out.println(Objects.equals(i, KhStateEnum.Launched.valueOf()));
    }

}
