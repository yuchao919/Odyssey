package demos;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FileStreamDemo {

    public static void run() {
        File f = new File("../data/test.txt");

        System.out.println(f);
    }

    public static void createTemFileDemo() {
        try {
            File f = File.createTempFile("../data/tmp-", ".txt");
            f.deleteOnExit();

            System.out.println(f.isFile());
            System.out.println(f.getAbsolutePath());
        } catch (IOException e) {

        }
    }

    public static void pathDemo() {
        Path p1 = Paths.get(".", "project", "study");
        System.out.println(p1);

        Path p2 = p1.toAbsolutePath(); // 转换为绝对路径
        System.out.println(p2);

        Path p3 = p2.normalize();// 转换为规范路径
        System.out.println(p3);

        File f = p3.toFile(); // 转为File对象
        System.out.println(f);

        for (Path p : Paths.get("..").toAbsolutePath()) { // 可以直接遍历Path
            System.out.println(" " + p);
        }
    }

    public static void readFile() {
        try (InputStream input = new FileInputStream("./data/test.txt")) {
            int n;
            while ((n = input.read()) != -1) {
                System.out.println((char) n);
            }
        } catch (IOException ex) {
            ex.printStackTrace();
        }
        // 编译器在此自动为我们写入finally并调用close()
    }

    public static void printClassPath() {

        Path p1 = Paths.get("/");

        System.out.println(p1.toAbsolutePath().normalize());

    }
}
