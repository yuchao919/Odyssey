using System;
using System.Net;

namespace EssentialConsole.Demos
{
    public class SimpleHttpListener
    {
        public void Run()
        {
            // 检查系统是否支持
            if (!HttpListener.IsSupported)
            {
                throw new System.InvalidOperationException("使用 HttpListener 必须为 Windows XP SP2 或 Server 2003 以上系统！");
            }
            // 注意前缀必须以 / 正斜杠结尾
            string[] prefixes = new string[] { "http://localhost:49152/" };
            // 创建监听器.
            HttpListener listener = new HttpListener();
            // 增加监听的前缀.
            foreach (string s in prefixes)
            {
                listener.Prefixes.Add(s);
            }
            // 开始监听
            listener.Start();
            Console.WriteLine("监听中...");
            while (true)
            {
                // 注意: GetContext 方法将阻塞线程，直到请求到达
                HttpListenerContext context = listener.GetContext();
                // 取得请求对象
                HttpListenerRequest request = context.Request;
                Console.WriteLine("{0} {1} HTTP/1.1", request.HttpMethod, request.RawUrl);
                Console.WriteLine("Accept: {0}", string.Join(",", request.AcceptTypes));
                Console.WriteLine("Accept-Language: {0}", string.Join(",", request.UserLanguages));
                Console.WriteLine("User-Agent: {0}", request.UserAgent);
                Console.WriteLine("Accept-Encoding: {0}", request.Headers["Accept-Encoding"]);
                Console.WriteLine("Connection: {0}", request.KeepAlive ? "Keep-Alive" : "close");
                Console.WriteLine("Host: {0}", request.UserHostName);
                Console.WriteLine("Pragma: {0}", request.Headers["Pragma"]);
                // 取得回应对象
                HttpListenerResponse response = context.Response;
                // 构造回应内容
                string responseString
                    = @"<html>
                            <head><title>From HttpListener Server</title></head>
                            <body><h1>Hello, world.</h1></body>
                        </html>";
                // 设置回应头部内容，长度，编码
                response.ContentLength64 = System.Text.Encoding.UTF8.GetByteCount(responseString);
                response.ContentType = "text/html; charset=UTF-8";
                // 输出回应内容
                System.IO.Stream output = response.OutputStream;
                System.IO.StreamWriter writer = new System.IO.StreamWriter(output);
                writer.Write(responseString);
                // 必须关闭输出流
                writer.Close();

                if (Console.KeyAvailable)
                    break;
            }
            // 关闭服务器
            listener.Stop();

        }
    }
}
