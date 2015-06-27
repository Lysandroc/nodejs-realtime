var http = require('http');

http.createServer(function(request,response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	if(request.url=="/") {
		response.write("pagina inicial!");
	} else if(request.url =="/bemvindo") {
		response.write("bem vindo!");
	} else {
		response.write("pagina nao encontrada!");
	}
	response.end();
}).listen(3000, function() {
	console.log('Aplicacao inicializada!');
});	