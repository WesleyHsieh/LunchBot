
var fs      = require('fs');
var express = require('express');
var https   = require('https');
var path    = require('path');
var pug     = require('pug');

var RecipeLib = require('./logic.js');

var key = fs.readFileSync('./ssl.key');
var cert = fs.readFileSync('./ssl.cert')
var https_options = {
    key: key,
    cert: cert
};

var PORT = 443;
app = express();

server = https.createServer(https_options, app).listen(PORT);
console.log('HTTPS Server listening on Port %s', PORT);

// routes
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/room', function(req, res) {
    res.sendFile(path.join(__dirname, 'room.html'));
});

app.get('/room', function(req, res) {
  var locals = {
    maintainer: {
      name: 'Forbes Lindesay',
      twitter: '@ForbesLindesay',
      blog: 'forbeslindesay.co.uk'
    }
  };

  var html = pug.renderFile(path.join(__dirname, 'templates', 'room.pug'), locals);
  res.send(html);
});

app.get('/room/:id', function(req, res) {
  // Where we have entered a specific room and want to vote for recipes (or add them)
  var mac = RecipeLib.Recipe("Mac n Cheese");
  mac.details = "macaroni and cheese, ya dig?";
  mac.link = "http://cdn1.tmbi.com/TOH/Images/Photos/37/300x300/exps41117_ESC1801517D82.jpg";
  var locals = {
    room_id: req.params.id,
    recipes: [ mac, mac , mac ]
  };
  var html = pug.renderFile(path.join(__dirname, 'templates', 'vote.pug'), locals);
  res.send(html);
});

app.get('/room/:id/mealtime', function(req, res) { });

app.get('/room/:id/split', function(req, res) { });
