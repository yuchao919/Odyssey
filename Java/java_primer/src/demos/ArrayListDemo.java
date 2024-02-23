package demos;

import java.text.Collator;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Locale;

public class ArrayListDemo {

    public static List<String> getStrList() {
        List<String> strList = new ArrayList<>();
        strList.add("北京");
        strList.add("上海");
        strList.add("广州");
        strList.add("深圳");
        strList.add("武汉");
        strList.add("1");
        strList.add("a");
        strList.add("A");
        strList.add("C");
        strList.add("");
        strList.add("&");
        return strList;
    }

    public static void collectionSort() {
        List<String> list = getStrList();

        Collections.sort(list);

        list.forEach(x -> System.out.println(x));
    }

    public static void pinyinSort() {

        List<String> list = getStrList();

        String[] arr = list.toArray(new String[list.size()]);

        Arrays.sort(arr, Collator.getInstance(Locale.CHINA));

        for (String str : arr) {
            System.out.println(str);
        }
    }
}
