package com.itranswarp.learnjava.servlet;

import java.io.PrintWriter;
import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/hi")
public class RedirectServlet extends HttpServlet {
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    // 构造重定向的路径:
    String name = req.getParameter("name");
    String redirectToUrl = "/hello" + (name == null ? "" : "?name=" + name);
    // 发送重定向响应:
    resp.sendRedirect(redirectToUrl);

    /**
     * 
     * 如果浏览器发送GET /hi请求，RedirectServlet将处理此请求。由于RedirectServlet在内部又发送了重定向响应，因此，浏览器会收到如下响应：
     * 
     * HTTP/1.1 302 Found
     * Location: /hello
     */
  }
}