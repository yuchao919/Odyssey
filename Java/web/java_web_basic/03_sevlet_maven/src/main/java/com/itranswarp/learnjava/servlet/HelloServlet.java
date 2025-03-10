package com.itranswarp.learnjava.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

// WebServlet注解表示这是一个Servlet，并映射到地址/:
@WebServlet(urlPatterns = "/")
public class HelloServlet extends HttpServlet {
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {
    // 设置响应类型:
    resp.setContentType("text/html");
    // 获取输出流:
    PrintWriter pw = resp.getWriter();
    // 写入响应:
    pw.write("<h1>Hello, world!</h1>");
    // 最后不要忘记flush强制输出:
    pw.flush();
  }
}