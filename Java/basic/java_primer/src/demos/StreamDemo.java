package demos;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

import models.FibonacciSupplier;
import models.NatualSupplier;

public class StreamDemo {

    public static void createStream() {
        // 最简单的创建Stream的方法，实际没啥应用，只有在写测试的时候有用
        Stream<String> stream = Stream.of("b", "c", "a");
        stream.forEach(System.out::printf);
    }

    public static void supplierCreateStream() {
        // 继承Supplier接口
        NatualSupplier supplier = new NatualSupplier();
        // 代表一个可以无限获取元素的Stream，这时候数据并不在内存，只是记录数据关系
        Stream<Integer> natual = Stream.generate(supplier);
        // 如果直接这么算，也能运行，但是会把int值输出完或者内存溢出
        // natual.forEach(System.out::println);

        // 只取<=20的元素，这行代码就说明，Stream是在forEach方法需要用到元素的时候再去获取元素
        // 在使用元素之前，Stream是不占用内存的
        natual.limit(20).forEach(System.out::println);
    }

    public static void typeStream() {
        IntStream is = Arrays.stream(new int[] { 1, 2, 3 });
        is.forEach(System.out::println);
    }

    public static void fibonacciStream() {
        IntStream is = IntStream.generate(new FibonacciSupplier());

        is.limit(9).forEach(System.out::println);
    }

    public static void mapDemo() {

        Stream<Integer> s1 = Stream.of(1, 2, 3);

        Stream<Integer> s2 = s1.map(x -> {
            return x * x;
        });

        s2.forEach(System.out::println);
    }

    public static void mapFunctionDemo() {

        Stream<Integer> s1 = Stream.of(1, 2, 3);

        Stream<Integer> s2 = s1.map(new Function<Integer, Integer>() {
            public Integer apply(Integer t) {
                return t * t;
            };
        });

        s2.forEach(System.out::println);
    }

    public static void filterDemo() {

        Stream<Integer> s1 = Stream.of(1, 2, 3);

        Stream<Integer> s2 = s1.filter(x -> {
            return x % 2 == 1;
        });

        s2.forEach(System.out::println);
    }

    public static void filterPredicateDemo() {

        Stream<Integer> s1 = Stream.of(1, 2, 3);

        Stream<Integer> s2 = s1.filter(new Predicate<Integer>() {
            public boolean test(Integer t) {
                return t % 2 == 1;
            };
        });

        s2.forEach(System.out::println);
    }

    public static void reduceDemo() {
        // 按行读取配置文件:
        List<String> props = new ArrayList<String>(
                Arrays.asList("profile=native", "debug=true", "logging=warn", "interval=500"));
        Map<String, String> map = props.stream()
                // 把k=v转换为Map[k]=v:
                .map(kv -> {
                    String[] ss = kv.split("\\=", 2);
                    Map<String, String> m1 = new HashMap<String, String>();
                    m1.put(ss[0], ss[1]);
                    return m1;
                })
                // 把所有Map聚合到一个Map:
                .reduce(new HashMap<String, String>(), (m, kv) -> {
                    m.putAll(kv);
                    return m;
                });
        // 打印结果:
        map.forEach((k, v) -> {
            System.out.println(k + " = " + v);
        });
    }

    public static void outDemo() {
        // 我们对s4进行reduce()聚合计算，会不断请求s4输出它的每一个元素。
        // 因为s4的上游是s3，它又会向s3请求元素，导致s3向s2请求元素，s2向s1请求元素，
        // 最终，s1从Supplier实例中请求到真正的元素，并经过一系列转换，最终被reduce()聚合出结果。
        Stream<Integer> s1 = Stream.generate(new NatualSupplier());
        Stream<Integer> s2 = s1.map(n -> n * n);
        Stream<Integer> s3 = s2.map(n -> n - 1);
        Stream<Integer> s4 = s3.limit(10);
        s4.reduce(0, (acc, n) -> acc + n);
    }

    public static void toListDemo() {
        Stream<String> stream = Stream.of("Apple", "", null, "Pear", "  ", "Orange");
        List<String> list = stream.filter(s -> s != null && s != "").collect(Collectors.toList());
        System.out.println(list);
    }

    public static void toArrayDemo() {
        Stream<String> stream = Stream.of("Apple", "", null, "Pear", "  ", "Orange");
        List<String> list = stream.filter(s -> s != null && s != "").collect(Collectors.toList());
        String[] array = list.stream().toArray(String[]::new);
        System.out.println(array.length);
    }

    public static void toMapDemo() {
        Stream<String> stream = Stream.of("APPL:Apple", "MSFT:Microsoft");
        Map<String, String> map = stream
                .collect(Collectors.toMap(
                        // 把元素s映射为key:
                        s -> s.substring(0, s.indexOf(':')),
                        // 把元素s映射为value:
                        s -> s.substring(s.indexOf(':') + 1)));
        System.out.println(map);
    }

    public static void toGroupDemo() {
        List<String> list = Stream.of("Apple", "Banana", "Blackberry", "Coconut", "Avocado", "Cherry", "Apricots")
                .collect(Collectors.toList());
        Map<String, List<String>> groups = list.stream()
                .collect(Collectors.groupingBy(s -> s.substring(0, 1), Collectors.toList()));
        System.out.println(groups);
    }
}
