
var fs = require('fs');
var express = require('express');
var https = require('https');
var path = require('path');

var key = fs.readFileSync('./ssl.key');
var cert = fs.readFileSync('./ssl.cert')
var https_options = {
    key: key,
    cert: cert
};
var PORT = 443;
var HOST = '';
app = express();

server = https.createServer(https_options, app).listen(PORT, HOST);

console.log('HTTPS Server listening on %s:%s', HOST, PORT);

// routes
app.get('/hey', function(req, res) {
    // res.sendFile('~/testing-out/index.html');
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/ho', function(req, res) {
    res.send('HO!');
});
