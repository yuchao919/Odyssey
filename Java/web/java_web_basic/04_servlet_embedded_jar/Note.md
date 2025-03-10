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