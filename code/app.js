var express = require('express');
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/home.html');
});
app.get('/presentation', function (req, res) {
    res.sendFile(__dirname + '/presentation.html');
});
app.get('/realisation', function (req, res) {
    res.sendFile(__dirname + '/realisations.html');
});
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/contact.html');
});

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/img', express.static(__dirname + '/img'));
app.get('/page', function (req, res) {
    res.sendFile(__dirname + '/home.html');
});

http.listen(1337, function () {
    console.log('listening on *:1337');
});