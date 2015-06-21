var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(request, response) {
	var endereco_arquivo;
	if (request.url == "/artigos" || request.url == "/artigos") {
		endereco_arquivo = '/artigos.html';
	} else if(request.url == "/contato") {
		endereco_arquivo = '/contato.html';
	} else {
		endereco_arquivo = '/erro.html';	
	}
	fs.readFile(__dirname + endereco_arquivo, function(err,html) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();
	});		
	
}).listen(3000, function() {
	console.log('Aplicacao inicializada!');
});	 