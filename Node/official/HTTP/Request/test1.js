var http = require("http"); //http 请求
//var https = require("https"); //https 请求
var querystring = require("querystring");

function request(path, param, callback) {
  var options = {
    hostname: "api.chuchujie.com",
    port: 80, //端口号 https默认端口 443， http默认的端口号是80
    path: path,
    method: "POST",
    headers: {
      Connection: "keep-alive",
      "Content-Length": 111,
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "User-Agent":
        "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36"
    } //伪造请求头
  };

  var req = http.request(options, function(res) {
    var json = ""; //定义json变量来接收服务器传来的数据
    console.log(res.statusCode);
    //res.on方法监听数据返回这一过程，"data"参数表示数数据接收的过程中，数据是一点点返回回来的，这里的chunk代表着一条条数据
    res.on("data", function(chunk) {
      json += chunk; //json由一条条数据拼接而成
    });
    //"end"是监听数据返回结束，callback（json）利用回调传参的方式传给后台结果再返回给前台
    res.on("end", function() {
      callback(json);
    });
  });

  req.on("error", function() {
    console.log("error");
  });
  //这是前台参数的一个样式，这里的参数param由后台的路由模块传过来，而后台的路由模块参数是前台传来的
  //    var obj = {
  //        query: '{"function":"newest","module":"zdm"}',
  //        client: '{"gender":"0"}',
  //        page: 1
  //}
  req.write(querystring.stringify(param)); //post 请求传参
  req.end(); //必须要要写，
}
