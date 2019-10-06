var http = require('http'),
  url = require('url'),
  dns = require('dns'),
  qs = require('querystring'),
  fs = require('fs');

function router(req, res, pathname) {
  switch (pathname) {
    case '/dnslookup':
      lookup(req, res);
      break;
    default:
      showIndex(req, res);
  }
}

function showIndex(req, res) {
  var pagePath = __dirname + '/' + 'dns-lookup.html';
  var html = fs.readFileSync(pagePath);
  res.end(html);
}

function lookup(req, res) {
  var postData = '';
  req.on('data', function(data) {
    postData += data;
  });
  req.on('end', function(data) {
    var json = qs.parse(postData);
    var hostname = json.host;
    var rrtype = json.rrtype;
    dns.resolve(hostname, rrtype, function(err, adresses) {
      if (err) {
        res.end(JSON.stringify({errcode: 1, ips: []}));
      }
      res.end(JSON.stringify({errcode: 0, ips: adresses}));
    });
  });
}

http
  .createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    req.setEncoding('utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    router(req, res, pathname);
  })
  .listen(3000, '127.0.0.1');
