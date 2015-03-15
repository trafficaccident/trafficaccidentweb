var Fs = require('fs');
var Http = require('http');
var Express = require('express');
var HttpProxy = require('http-proxy');

var app = Express();
var server = Http.createServer(app);

app.set('port', process.env.PORT || 2323, '127.0.0.1');
app.use('/app', Express.static(__dirname + '/app'));

var proxy = HttpProxy.createProxyServer({changeOrigin: true});

app.all('/api/*', function(req, res) {
    console.log('sending proxy...');
    req.baseUrl = req.baseUrl.replace('api/', '');
    console.log('base url: ', req.baseUrl);
    var api_url = 'https://warm-beach-9567.herokuapp.com';
    proxy.web(req, res, { target: api_url, secure: false });
});

app.get('/form', function(req, res) {
	Fs.readFile(__dirname + '/app/form.html', 'utf8', function (error, text) {
		res.send(text);
	});
});

app.get('/*', function(req, res) {
	Fs.readFile(__dirname + '/app/layout.html', 'utf8', function (error, text) {
		res.send(text);
	});
});

console.log('Server (accident map) listening on port ' + app.get('port'));
server.listen(app.get('port'));
