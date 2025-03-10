package com.maven_learning;

import java.lang.reflect.Field;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicReference;

import org.apache.commons.collections4.CollectionUtils;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.maven_learning.dao.dto.ExportRowDataDTO;
import com.maven_learning.extension.CollectionExtension;
import com.maven_learning.extension.StringExtension;

import lombok.experimental.ExtensionMethod;

/**
 * Hello world!
 *
 */

@ExtensionMethod({ CollectionExtension.class, StringExtension.class })
public class App {
    public static void main(String[] args) {
        Object obj = null;

        Integer a = Objects.toString(obj, null).asInt();

        System.out.println(a);

    }

    public static void parseDemo() {

        List<String> list = new ArrayList<>(Arrays.asList(
                null,
                "",
                "1",
                "1234.56",
                "a123"));

        List<Integer> numList = new ArrayList<>();

        for (String s : list) {
            numList.add(s.asInt());
        }

    }

    public static void getAnatationDemo() {
        List<Field> fields = Arrays.asList(ExportRowDataDTO.class.getDeclaredFields())
                .findAll(x -> x.getAnnotation(JsonIgnore.class) == null);
        // boolean ignore = fields.get(0).getAnnotation(JsonIgnore.class) != null;
        // fields.removeIf(x -> {x.getAnnotation(JsonIgnore.class) == null});
        // fields.removeIf(x -> true);

        System.out.println(fields.size());

    }

    public static void stringBuilderDemo() {
        StringBuilder sb = new StringBuilder();

        sb.append("参数序列化成功");

        System.out.println(sb.toString());

        sb.append("请求结果成功 \n");

        System.out.println(sb.toString());
    }

    public static void listDemo() {
        // List<Integer> list = new ArrayList<>();

        // list.add(new Integer("1"));
        // list.add(new Integer("2"));
        // list.add(new Integer("3"));

        // Integer[] arr = new Integer[3];
        // arr[0] = new Integer("1");
        // arr[1] = new Integer("2");
        // arr[2] = new Integer("3");

        // List<Integer> list = Arrays.asList(arr);

        // List<Integer> list = Arrays.asList(
        // new Integer("1"),
        // new Integer("2"),
        // new Integer("3"));

        List<Integer> list = new ArrayList<>();
        list.addAll(Arrays.asList(new Integer("1"), new Integer("2"), new Integer("3")));
        list.removeIf(x -> x.compareTo(2) > 0);

        System.out.println(list.size());
    }

    public static void hashMapDemo() {
        Map<UUID, String> map = new HashMap<>();

        UUID u1 = UUID.fromString("eb2f1300-e8f7-4040-a4eb-4492dcf04fbc");
        UUID u2 = UUID.fromString("eb2f1300-e8f7-4040-a4eb-4492dcf04fbc");

        map.put(u1, "A");
        map.put(u2, "B");
        map.put(u1, "C");

        System.out.println(map.toString());
    }

    public static void atomicReferenceDemo() {

        AtomicReference<UUID> khGUID = new AtomicReference<UUID>(null);

        khGUID.set(UUID.randomUUID());

        System.out.println(khGUID.get());

    }

    public static void performanceDemo() {
        // 开始时间
        long stime = System.currentTimeMillis();
        directDemo();
        // 结束时间
        long etime = System.currentTimeMillis();
        // 计算执行时间
        System.out.printf("执行时长：%d 毫秒.", (etime - stime));

        // // 开始时间
        // long stime1 = System.currentTimeMillis();
        // directDemo();
        // // 结束时间
        // long etime1 = System.currentTimeMillis();
        // // 计算执行时间
        // System.out.printf("执行时长：%d 毫秒.", (etime1 - stime1));
    }

    public static void anyDemo() {
        List<Integer> list = null;
        for (int i = 0; i < 100000000; i++) {
            if (list.any()) {
            }
        }
    }

    public static void collectionUtilsDemo() {
        List<Integer> list = null;
        for (int i = 0; i < 100000000; i++) {
            if (CollectionUtils.isEmpty(list)) {
            }
        }
    }

    public static void directDemo() {
        List<Integer> list = null;
        for (int i = 0; i < 100000000; i++) {
            if (list != null && list.size() > 0) {
            }
        }
    }

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

        list.removeIf(x -> Objects.equals(x,
                UUID.fromString("eb2f1300-e8f7-4040-a4eb-4492dcf04fbc")));

        List<Integer> aa = Arrays.asList(1, 2, 3);

        System.out.println(aa.size());

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
