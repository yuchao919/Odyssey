package com.itranswarp.learnjava.servlet;

import java.io.PrintWriter;
import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(urlPatterns = "/hello")
public class HelloServlet extends HttpServlet {
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    resp.setContentType("text/html");
    String name = req.getParameter("name");
    if (name == null) {
      name = "world";
    }
    PrintWriter pw = resp.getWriter();
    pw.write("<h1>Hello, " + name + "!</h1>");
    pw.flush();
  }
}