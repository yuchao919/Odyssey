# Note

> https://liaoxuefeng.com/books/java/web/servlet-dev/index.html

目录结构

web-servlet-hello/
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── com/
        │       └── itranswarp/
        │           └── learnjava/
        │                ├── servlet/
        │                │    └── HelloServlet.java
        │                └── Main.java
        ├── resources/   
        └── webapp/      


其中，<packaging>类型仍然为war，引入依赖tomcat-embed-core和tomcat-embed-jasper，引入的Tomcat版本<tomcat.version>为10.1.1。
不必引入Servlet API，因为引入Tomcat依赖后自动引入了Servlet API。因此，我们可以正常编写Servlet如下

这个例子可以直接打包成jar包，然后 jjava -jar hello.war 启动，主要是去掉了Tomcat的scope，让Tomcat的lib打进了包

## Redirect 重定向

重定向有两种：一种是302响应，称为临时重定向，一种是301响应，称为永久重定向。
两者的区别是，如果服务器发送301永久重定向响应，浏览器会缓存/hi到/hello这个重定向的关联，下次请求/hi的时候，浏览器就直接发送/hello请求了。
HttpServletResponse提供了快捷的redirect()方法实现302重定向。如果要实现301永久重定向，可以这么写：

resp.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY); // 301
resp.setHeader("Location", "/hello");

## 转发 Forward

Forward是指内部转发。当一个Servlet处理请求的时候，它可以决定自己不继续处理，而是转发给另一个Servlet处理。
例如，我们已经编写了一个能处理/hello的HelloServlet，继续编写一个能处理/morning的ForwardServlet
ForwardServlet在收到请求后，它并不自己发送响应，而是把请求和响应都转发给路径为/hello的Servlet，即下面的代码：
> req.getRequestDispatcher("/hello").forward(req, resp);
后续请求的处理实际上是由HelloServlet完成的。这种处理方式称为转发（Forward）。
转发和重定向的区别在于，转发是在Web服务器内部完成的，对浏览器来说，它只发出了一个HTTP请求。
注意到使用转发的时候，浏览器的地址栏路径仍然是/morning，浏览器并不知道该请求在Web服务器内部实际上做了一次转发。