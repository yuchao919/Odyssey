using System;
using System.Net;
using System.Net.Sockets;

namespace EssentialConsole.Demos
{
    public class SimpleTcpListener
    {
        public void Run()
        {
            // 取得本机的 loopback 网络地址，即 127.0.0.1
            IPAddress address = IPAddress.Loopback;
            // 创建可以访问的端点，49152 表示端口号
            IPEndPoint endPoint = new IPEndPoint(address, 49152);
            // 创建 TCP 监听器
            TcpListener newserver = new TcpListener(endPoint);
            // 启动监听器
            newserver.Start();
            Console.WriteLine("开始监听...");
            while (true)
            {
                // 等待客户端连接
                TcpClient newclient = newserver.AcceptTcpClient();
                Console.WriteLine("已经建立连接！");
                // 得到一个网络流
                NetworkStream ns = newclient.GetStream();
                // 处理过程中使用 UTF-8 编码
                System.Text.Encoding utf8 = System.Text.Encoding.UTF8;
                byte[] request = new byte[4096];
                int length = ns.Read(request, 0, 4096);
                string requestString = utf8.GetString(request, 0, length);
                Console.WriteLine(requestString);

                // 状态行
                string statusLine = "HTTP/1.1 200 OK\r\n";
                byte[] statusLineBytes = utf8.GetBytes(statusLine);
                // 准备发送到客户端的网页
                string responseBody
                    = @"<html>
                            <head><title>From TcpListener Server</title></head>
                            <body><h1>Hello, world.</h1></body>
                        </html>";
                byte[] responseBodyBytes = utf8.GetBytes(responseBody);
                // 回应的头部
                string responseHeader =
                    string.Format(
                        "Content-Type: text/html; charset=UTF-8\r\nContent-Length: {0}\r\n",
                        responseBody.Length
                        );
                byte[] responseHeaderBytes = utf8.GetBytes(responseHeader);

                // 输出回应的状态行
                ns.Write(statusLineBytes, 0, statusLineBytes.Length);
                // 输出回应的头部
                ns.Write(responseHeaderBytes, 0, responseHeaderBytes.Length);
                // 输出回应头部与内容之间的空行
                ns.Write(new byte[] { 13, 10 }, 0, 2);
                // 输出内容部分
                ns.Write(responseBodyBytes, 0, responseBodyBytes.Length);

                // 关闭与客户端的连接
                newclient.Close();

                if (Console.KeyAvailable)
                    break;
            }
            // 关闭服务器
            newserver.Stop();
        }
    }
}
