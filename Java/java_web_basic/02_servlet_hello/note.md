# Note

```ps1
    # clean旧生成文件
    rm -Force .\build\*
    # 拷贝参数
    cp -Force web/WEB-INF/* build/WEB-INF/
    # 从examples的例子可以看出，生成文件要放在classes里
    mkdir build/WEB-INF/classes
    # 编译 
    javac -cp web/WEB-INF/lib/jakarta.servlet-api-5.0.0.jar -encoding UTF-8 -d build/WEB-INF/classes/ src/main/java/com/example/MyServlet.java
    # 生成war包
    jar -cvf my-web-app.war -C build/ .

    # 修改控制它字符集为UTF-8
    chcp 65001
    # 启动Tomcat
    catalina run
```