package demos.network;

import java.io.IOException;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;

public class TcpServer {
    public static void main(String[] args) throws IOException {
        // 监听指定端口
        try (ServerSocket ss = new ServerSocket(6666, 50, InetAddress.getLocalHost())) {
            System.out.println("tcp server is running...");
            for (;;) {
                Socket sock = ss.accept();
                System.out.println("connected from " + sock.getRemoteSocketAddress());
                Thread t = new TcpHandler(sock);
                t.start();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}