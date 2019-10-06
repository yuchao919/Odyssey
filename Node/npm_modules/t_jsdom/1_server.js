var http = require('http');
var auth = require('basic-auth');
var compare = require('tsscmp');

// Create server
var server = http.createServer(function(req, res) {
  var credentials = auth(req);

  // Check credentials
  // The "check" function will typically be against your user store
  if (!credentials || !check(credentials.name, credentials.pass)) {
    res.statusCode = 401;
    res.setHeader('WWW-Authenticate', 'Basic realm="example"');
    res.end('Access denied');
  } else {
    res.end('Access granted');
  }
});

// Basic function to validate credentials for example
function check(name, pass) {
  var valid = true;

  // Simple method to prevent short-circut and use timing-safe compare
  valid = compare(name, 'john') && valid;
  valid = compare(pass, 'secret') && valid;

  return valid;
}

// Listen
server.listen(3000);
