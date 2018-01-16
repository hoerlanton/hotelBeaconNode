'use strict';

const bodyParser = require('body-parser'),
 express = require('express'),
 path = require('path'),
 favicon = require('serve-favicon'),
 logger = require('morgan'),
 cookieParser = require('cookie-parser'),
 index = require('./routes/index'),
//var users = require('./routes/users');
 config = require('config'),
 request = require('request'),
 http = require('http'),
 fs = require("fs"),

 app = express();

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