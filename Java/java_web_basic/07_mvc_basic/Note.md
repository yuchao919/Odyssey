# Note

> https://liaoxuefeng.com/books/java/web/jsp/index.html




- 需要展示的User被放入HttpServletRequest中以便传递给JSP，因为一个请求对应一个HttpServletRequest，我们也无需清理它，处理完该请求后HttpServletRequest实例将被丢弃；
- 把user.jsp放到/WEB-INF/目录下，**是因为WEB-INF是一个特殊目录，Web Server会阻止浏览器对WEB-INF目录下任何资源的访问**，这样就防止用户通过/user.jsp路径直接访问到JSP页面；
- JSP页面首先从request变量获取User实例，然后在页面中直接输出，此处未考虑HTML的转义问题，有潜在安全风险。

我们在浏览器访问http://localhost:8080/user，请求首先由UserServlet处理，然后交给user.jsp渲染：


我们把UserServlet看作业务逻辑处理，把User看作模型，把user.jsp看作渲染，这种设计模式通常被称为MVC：Model-View-Controller，即UserServlet作为控制器（Controller），User作为模型（Model），user.jsp作为视图（View）。

使用MVC模式的好处是，Controller专注于业务处理，它的处理结果就是Model。Model可以是一个JavaBean，也可以是一个包含多个对象的Map，Controller只负责把Model传递给View，View只负责把Model给“渲染”出来，这样，三者职责明确，且开发更简单，因为开发Controller时无需关注页面，开发View时无需关心如何创建Model。