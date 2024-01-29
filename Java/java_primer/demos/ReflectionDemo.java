package demos;

import java.lang.reflect.Constructor;

import models.Student;

public class ReflectionDemo {

    public static void run() {
        printClassInfo("".getClass());
        printClassInfo(Runnable.class);
        printClassInfo(java.time.Month.class);
        printClassInfo(String[].class);
        printClassInfo(int.class);
    }

    static void printClassInfo(Class cls) {
        System.out.println("Class name: " + cls.getName());
        System.out.println("Simple name: " + cls.getSimpleName());
        if (cls.getPackage() != null) {
            System.out.println("Package name: " + cls.getPackage().getName());
        }
        System.out.println("is interface: " + cls.isInterface());
        System.out.println("is enum: " + cls.isEnum());
        System.out.println("is array: " + cls.isArray());
        System.out.println("is primitive: " + cls.isPrimitive());
        System.out.println();
        System.out.println();
        System.out.println();
    }

    static boolean isClassPresent(String name) {
        try {
            Class.forName(name);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public static void printStudentFields() {
        try {
            Class stdClass = Student.class;
            // 获取public字段"score":
            System.out.println(stdClass.getField("score"));
            // 获取继承的public字段"name":
            System.out.println(stdClass.getField("name"));
            // 获取private字段"grade":
            System.out.println(stdClass.getDeclaredField("grade"));
        } catch (Exception ex) {
            ex.printStackTrace();
        }
    }

    public static void constructorDemo() throws Exception {
        Constructor<Integer> cons1 = Integer.class.getConstructor(int.class);
        Integer n1 = (Integer) cons1.newInstance(123);
        System.out.println(n1);
    }
}
