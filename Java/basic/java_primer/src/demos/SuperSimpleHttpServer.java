package demos;

import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class SuperSimpleHttpServer {

    public static void start(int port) throws IOException {
        ServerSocket ss = new ServerSocket(port);
        System.out.println("server is running at port: " + port);
        try {
            while (true) {
                Socket sock = ss.accept();
                System.out.println("connected from " + sock.getRemoteSocketAddress());
                Thread t = new SuperSimpleHttpHandler(sock);
                t.start();
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            ss.close();
        }
    }
}
