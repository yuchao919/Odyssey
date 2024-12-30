package demos;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/")
public class HelloServletServer extends HttpServlet {

    private String message;

    @Override
    public void init() throws ServletException {
        // 执行必需的初始化
        message = "Hello World!";
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        // 设置响应类型:
        resp.setContentType("text/html");
        // 获取输出流:
        PrintWriter pw = resp.getWriter();
        // 写入响应:
        pw.write("<h1>" + message + "</h1>");
        // 最后不要忘记flush强制输出:
        pw.flush();
    }

    @Override
    public void destroy() {
        // 什么也不做
    }
}
