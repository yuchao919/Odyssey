const express = require('express');
const svgCaptcha = require('svg-captcha');

const app = express();

app.get('/captcha', function(req, res) {
  var captcha = svgCaptcha.create();
  // req.session.captcha = captcha.text;
  res.type('svg');
  res.status(200).send(captcha.data);
});

app.listen(8888, function(arguments) {
  // body
});
