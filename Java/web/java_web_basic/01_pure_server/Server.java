import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) throws IOException {
        String version = System.getProperty("java.version");
        System.out.println("java.version: " + version);
        // 监听指定端口
        try (ServerSocket ss = new ServerSocket(50080)) {
            System.out.println("\nserver is running...");
            for (;;) {
                Socket sock = ss.accept();
                System.out.println("connected from " + sock.getRemoteSocketAddress());
                Thread t = new Handler(sock);
                t.start();
            }
        }
    }
}