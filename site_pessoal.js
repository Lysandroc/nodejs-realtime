var http = require("http");
var fs = require("fs");

http.createServer(function(request, response) {
	fs.readFile(__dirname + '/index.html', function(err,html) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();	
	});	
}).listen(3000, function() {
	console.log('Aplicacao inicializada!');
});	