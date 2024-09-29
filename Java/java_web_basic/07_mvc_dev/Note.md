# Note

> https://liaoxuefeng.com/books/java/web/mvc-adv/index.html

web-mvc
├── pom.xml
└── src
    └── main
        ├── java
        │   └── com
        │       └── itranswarp
        │           └── learnjava
        │               ├── Main.java
        │               ├── bean
        │               │   ├── SignInBean.java
        │               │   └── User.java
        │               ├── controller
        │               │   ├── IndexController.java
        │               │   └── UserController.java
        │               └── framework
        │                   ├── DispatcherServlet.java
        │                   ├── FileServlet.java
        │                   ├── GetMapping.java
        │                   ├── ModelAndView.java
        │                   ├── PostMapping.java
        │                   └── ViewEngine.java
        └── webapp
            ├── WEB-INF
            │   ├── templates
            │   │   ├── _base.html
            │   │   ├── hello.html
            │   │   ├── index.html
            │   │   ├── profile.html
            │   │   └── signin.html
            │   └── web.xml
            └── static
                ├── css
                │   └── bootstrap.css
                └── js
                    ├── bootstrap.js
                    └── jquery.js

实现简易的mvc框架