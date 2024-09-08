import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Server {
    public static void main(String[] args) throws IOException {
        // 监听指定端口
        try (ServerSocket ss = new ServerSocket(58080)) {
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