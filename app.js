'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');
var config = require('config');
var request = require('request');
var http = require('http');
var fs = require("fs");

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(bodyParser.urlencoded({ extended: false }));


app.use(bodyParser.json());

//Setting port
app.set('port', process.env.PORT || 8000);

//Set Public folder as static folder
app.use(express.static('public'));

app.use('/', index);

/*
 * Start server
 * Webhooks must be available via SSL with a certificate signed by a valid
 * certificate authority.
 */
app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});

module.exports = app;