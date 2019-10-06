const express = require('express');
const logger = require('log4js').getLogger();

const app = express();

app.use(express.static(__dirname + '/public'));

module.exports = app;
