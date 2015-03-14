var Fs = require('fs');
var Http = require('http');
var Express = require('express');
var HttpProxy = require('http-proxy');

var app = Express();
var server = Http.createServer(app);

app.set('port', process.env.PORT || 2323, '127.0.0.1');
app.use('/app', Express.static(__dirname + '/app'));

app.all('/api/*', function(req, res) {
    proxy.web(req, res, { target: '', secure: false });
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
