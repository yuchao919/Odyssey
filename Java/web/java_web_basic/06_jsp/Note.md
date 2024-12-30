# Note

> https://liaoxuefeng.com/books/java/web/jsp/index.html

目录结构跟上节一致。

JSP是Java Server Pages的缩写，它的文件必须放到/src/main/webapp下，文件名必须以.jsp结尾，整个文件与HTML并无太大区别，但需要插入变量，或者动态输出的地方，使用特殊指令<% ... %>。
访问JSP页面时，直接指定完整路径。例如，http://localhost:8080/hello.jsp。

JSP和Servlet有什么区别？
其实它们没有任何区别，因为JSP在执行前首先被编译成一个Servlet。在Tomcat的临时目录下，可以找到一个hello_jsp.java的源文件，这个文件就是Tomcat把JSP自动转换成的Servlet源码。

JSP本质上就是一个Servlet，只不过无需配置映射路径，Web Server会根据路径查找对应的.jsp文件，如果找到了，就自动编译成Servlet再执行。
在服务器运行过程中，如果修改了JSP的内容，那么服务器会自动重新编译。