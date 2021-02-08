console.log("Hello again !");

// server.js
var express = require('express');
var app = express();
var port = 3000;

// start the server
app.listen(port, function () {
    console.log('Go to : http://localhost:3000/');
});

// route our app
app.get('/', function (req, res) {
    res.send('hello world!');
});
