# Note

1. Set up project structure

    Organize your project directory to follow the standard structure for a Java web application:
    ```css
        my-web-app/
        ├── src/
        │   └── main/
        │       └── java/
        │           └── com/
        │               └── example/
        │                   └── MyServlet.java
        ├── web/
        │   └── WEB-INF/
        │       ├── web.xml
        │       ├── calsses/
        │       └── lib/
        ├── lib/
        │    └──jakarta.servlet-api-5.0.0.jar
        │
        └── build/
            └─classes/
    ```

2. Download the Servlet API (Version 5.0.0):

    - Download the jakarta.servlet-api-5.0.0.jar from Maven Central or another reputable source.
    - Place the downloaded JAR file into the web/WEB-INF/lib/ directory if you plan to use it locally (though this is typically not necessary as the servlet container provides the API).
    - Place the JAR file into lib/，for vscode to analysis the code.

3. Write Your Servlet Code:

    In the src/main/java/com/example/ directory, create your servlet class (e.g., MyServlet.java):
    ```java
        package com.example;

        import jakarta.servlet.ServletException;
        import jakarta.servlet.http.HttpServlet;
        import jakarta.servlet.http.HttpServletRequest;
        import jakarta.servlet.http.HttpServletResponse;

        import java.io.IOException;

        public class MyServlet extends HttpServlet {
            @Override
            protected void doGet(HttpServletRequest request, HttpServletResponse response)
                    throws ServletException, IOException {
                response.getWriter().println("Hello, Servlet 5.0!");
            }
        }
    ```

4. Create the web.xml Deployment Descriptor:

    In the web/WEB-INF/ directory, create the web.xml file:
    ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
                xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
                https://jakarta.ee/xml/ns/jakartaee/web-app_5_0.xsd"
                version="5.0">
            <servlet>
                <servlet-name>MyServlet</servlet-name>
                <servlet-class>com.example.MyServlet</servlet-class>
            </servlet>
            <servlet-mapping>
                <servlet-name>MyServlet</servlet-name>
                <url-pattern>/hello</url-pattern>
            </servlet-mapping>
        </web-app>
    ```

5. Copy Compiled Classes and Resources:

    Copy the compiled classes and your WEB-INF resources into the build directory:

    ```ps1 
        cp -Recurse -Force .\web\WEB-INF .\build\
    ```

6. Compile Your Java Source Files:

    Use the javac command to compile your Java source code. Run the following command from the root of your project directory (my-web-app/):
   
    ```ps1
        javac -cp lib/jakarta.servlet-api-5.0.0.jar -encoding UTF-8 -d build/WEB-INF/classes/ src/main/java/com/example/MyServlet.java
    ```
   
    - The -cp option specifies the classpath, where you include the Servlet API JAR.
    - The -d build/ option specifies the output directory for the compiled .class files.

7. Create the WAR File:

    Use the jar command to create a WAR file from the contents of the build directory:

    ```ps1
        jar -cvf my-web-app.war -C build/ .
    ```

    - This command creates a my-web-app.war file in the current directory, containing all the necessary files for your web application.

8. Deploy the WAR File:

    - Deploy the my-web-app.war file to a servlet container like Apache Tomcat 10 (which supports Servlet 5.0). You can simply copy the WAR file to the webapps directory of your Tomcat installation.
    - Start or restart Tomcat, and your servlet should be accessible at http://localhost:8080/my-web-app/hello.

9. Notes:

    - Java 17 Compatibility: Java 17 is fully compatible with Servlet 5.0, so there should be no issues with language features or the runtime.
    - Servlet Container (e.g., Tomcat 10): Servlet containers like Apache Tomcat 10 provide the Servlet 5.0 API. Therefore, you typically don't need to include the jakarta.servlet-api-5.0.0.jar in the WAR's WEB-INF/lib/ directory unless you are running the project locally without a container.
    - WAR File Structure: The WAR file should follow the standard layout, with compiled classes in WEB-INF/classes and libraries in WEB-INF/lib.


```ps1
    # clean旧生成文件
    rm -Recurse -Force .\build\*
    # 拷贝参数
    cp -Recurse -Force .\web\WEB-INF .\build\
    # 从examples的例子可以看出，生成文件要放在classes里
    mkdir build/WEB-INF/classes
    # 编译 
    javac -cp lib/jakarta.servlet-api-5.0.0.jar -encoding UTF-8 -d build/WEB-INF/classes/ src/main/java/com/example/MyServlet.java
    # 生成war包
    jar -cvf dist/my-web-app.war -C build/ .
    # 将war包放在Tomcat的webapps\目录下
    # 访问链接 http://localhost:8080/my-web-app/hello

    
    
    # 修改控制它字符集为UTF-8
    # chcp 65001
    # powershell里不能再使用原来适用于cmd的chcp 65001来解决utf-8编码的问题，要是你搜到用chcp 65001，结果又没效果，是因为这个只能cmd用。
    [System.Console]::OutputEncoding = [System.Console]::InputEncoding = [System.Text.Encoding]::UTF8
    # 设置JAVA_HOME 给Tomcat
    $env:JAVA_HOME="C:\Users\yuc05\scoop\apps\openjdk17\current"
    # 启动Tomcat
    catalina run
```

## web.xml 参考说明

    https://www.cnblogs.com/whgk/p/6399262.html