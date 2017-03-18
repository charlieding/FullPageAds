'use strict';

var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
var port = process.env.port || 1337;
var path = require('path');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'views/layouts')));

app.get('/', function (req, res) {
    res.render('home');
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});