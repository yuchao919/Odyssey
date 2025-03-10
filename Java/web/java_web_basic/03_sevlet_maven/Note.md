# Note

整个工程结构如下：

web-servlet-hello/
├── pom.xml
└── src/
    └── main/
        ├── java/
        │   └── com/
        │       └── itranswarp/
        │           └── learnjava/
        │               └── servlet/
        │                   └── HelloServlet.java
        ├── resources/
        └── webapp/

手动创建pom.xml文件，注意到dependencies的scope指定为provided，
表示编译时使用，但不会打包到.war文件中，因为运行期Web服务器本身已经提供了Servlet API相关的jar包。

需要设置 settings.json，给maven指定jdk版本
执行 mvn clean package打包，war包在target目录下
将war包放到Tomcat的webapps文件夹下，访问localhost:8080/hello 即可访问