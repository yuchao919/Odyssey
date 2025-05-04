# vue3-axios-mock

https://blog.csdn.net/fullbug/article/details/141506292

- mock 文件夹有多种方式模拟真实的后端 api 请求
- 通过 http-common 封装 axios，并且修改 baseUrl 指向 mock，真实上线再改成实际后端
- service 按照实际 url 来请求后端接口
