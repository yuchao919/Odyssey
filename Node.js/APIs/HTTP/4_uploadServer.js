const fs = require('fs');
const url = require('url');

const http = require('http');
const net = require('net');

const server = http.createServer();

let no = 0;

// server.on('request', (incomingMessage, serverResponse) => {
//   serverResponse.writeHead(200, { 'Content-Type': 'text/html' });
//   serverResponse.end('hello world!<br>');
// });

// server.listen(8080, () => {
//   console.log('server listening');
// });

http.createServer(function (request, response) {
  console.log(`${new Date().toLocaleTimeString()} ${request.method} ${request.url}`);

  if (request.method === 'GET') {
    fs.readFile(`${__dirname}/form.html`, (err, data) => {
      if (err) {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('Not Found<br>');
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(data.toString());
      }
    });
  }
  else {
    response.writeHead(200);

    var destinationFile = fs.createWriteStream(`${__dirname}/q.txt`);
    request.pipe(destinationFile);

    var fileSize = request.headers['content-length'];
    var uploadedBytes = 0;

    request.on('data', data => {
      uploadedBytes += data.length;
      var p = (uploadedBytes / fileSize) * 100;
      response.write("Uploading " + parseInt(p) + " %\n");
    });
    request.on('end', function () {
      response.end("File Upload Complete");
    });
  }
}).listen(8080, () => {
  console.log("server started");
});

/**
 * 上传一个名为p.txt的文件时，header如下
 * request作为一个IncomingMessage实例，也是一个实现ReadableStream接口的对象
 * 接收到的stream流的全部值如，这时就需要一个body-parser来序列化这个流的值了
 */

 /********request Begin************* */
// accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
// accept-encoding:"gzip, deflate, br"
// accept-language:"zh-CN,zh;q=0.9,en;q=0.8"
// cache-control:"max-age=0"
// connection:"keep-alive"
// content-length:"185"
// content-type:"multipart/form-data; boundary=----WebKitFormBoundarygNzxW9zwmo1QHcAO"
// dnt:"1"
// host:"localhost:8080"
// origin:"http://localhost:8080"
// referer:"http://localhost:8080/"
// upgrade-insecure-requests:"1"
// user-agent:"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"
 /********request End************* */




 /********上传文件p.txt Stream Begin************* */
 //  ------WebKitFormBoundarygNzxW9zwmo1QHcAO
//  Content-Disposition: form-data; name="file"; filename="p.txt"
//  Content-Type: text/plain

//  hello

//  ------WebKitFormBoundarygNzxW9zwmo1QHcAO--
 /********Stream End************* */



 /**
  * 下面是提交一个表单时，request的Header
  * 收到的stream username=asd&password=qqq
  */

// accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
// accept-encoding:"gzip, deflate, br"
// accept-language:"zh-CN,zh;q=0.9,en;q=0.8"
// cache-control:"max-age=0"
// connection:"keep-alive"
// content-length:"25"
// content-type:"application/x-www-form-urlencoded"
// dnt:"1"
// host:"localhost:8080"
// origin:"http://localhost:8080"
// referer:"http://localhost:8080/"
// upgrade-insecure-requests:"1"
// user-agent:"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36"

/*******small_pic.jpg Stream Begin********* */

// ------WebKitFormBoundarycsvtEK0r8ABB8neU
// Content-Disposition: form-data; name="file"; filename="small_pic.jpg"
// Content-Type: image/jpeg

// \FF\D8\FF\E0\00JFIF\00\00\00\00\00\00\FF\DB\00C\00
// 
// 

// 

// #%$""!&+7/&)4)!"0A149;>>>%.DIC<H7=>;\FF\DB\00C
// 
// ;("(;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;\FF\C0\00\00(\00("\00\FF\C4\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\FF\C4\00&\00\00\00\00\00\00\00\00\00!1"AQq$\91\A1\FF\C4\00\00\00\00\00\00\00\00\00\00\00\00\00\FF\C4\00\00\00\00\00\00\00\00\00\00\00\00\00!\FF\DA\00\00\00?\00_\AA\DAj\D4\D5#:\92v\BF\9F8\AD\F5\E1!\AB\EDz\BF\B4Cf\FB\87:\FD\FEc]O\A7Mya\96\AE\8C\B1\85'\CF\E65\FC\82+\B5\F9\A3fH\96\EF\C6I \F1\F2<s\9Eu\C2ד|\B4Pt\F7\82\83I91\CB/\BB\D2\DE\FD3\F5\AF\81\88ȝ\8D\AE휷\B7b\B5\91\EAW\8D{\A4\E5\A4\96\E3YU\E8;HF\B2yc\A3ہ\E3xd\A7OM\FBG\9C2\E8\A9\ED\5\BA|\8E	\AD.\B9;8\EF\F2\DD\FCu\96\AC\8F\F5\D4Tv\EEW>}\C3\F7+\E4\AE'
// \8Ct\A4\E9\8F\D0\CDwH\80t\AB&\B7\AA%I\A3WW@\F1\E3#\BF-x̙\A7v\97X\BC\85k\F5\E4\BA\F1\AE\87\D7\C2xZ\BC\CDrT\EBc\C1\C6/Q\A1-\A8:\83\F7G4C\92\9Cw\ECx?y\E5\915\8A\C2\CAǨP\C9\E7\FD`0\99W\BA)~\E3\C9\C3!#\E8a\95MY\D3)\B5ۑ\C0\90N\DFGZ_\9C\D7\CB\FC\D8\8FZӪ\C7\E1\90?0\C3\D8\F4\9C\8F\A2\C25\97iN\C1\D6\F46\FE1u\B9J͙\EBJ\AD
// \A8\00\C2\FE\CE|\EF\EF\EB0\C0\BBW\D6\CBX\B3\9AEF\F6\86!I\FA\DEa\95\91\B7\FF\D9
// ------WebKitFormBoundarycsvtEK0r8ABB8neU--

/*******small_pic.jpg Stream Begin********* */