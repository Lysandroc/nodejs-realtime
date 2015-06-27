var 
	http = require("http"),
    url = require("url"),
    fs = require("fs")
;

http.createServer(function(request, response) {
	var endereco_artigo = '/artigos.html', 
		endereco_contato = '/contato.html', 
		endereco_erro = '/erro.html', 
		result = url.parse(request.url);
	
	function EscreveHtmlResposta(nomeArquivo) { 
		fs.readFile(__dirname + nomeArquivo, function(err,html) {
		response.writeHead(200, {'Content-Type': 'text/html'});
		response.write(html);
		response.end();
		});
	}
	
	function callEscreveArquivo(exists) {
		if (exists && result.path == "/artigos" || result.pathname == "") {
			EscreveHtmlResposta(endereco_artigo);
		} else if(result.pathname == "/contato") {
			EscreveHtmlResposta(endereco_contato);
		} else {
			EscreveHtmlResposta(endereco_erro);
		}
	}
	
	fs.exists(endereco_artigo.substr(1,endereco_artigo.length), callEscreveArquivo);
	
}).listen(3000, function() {
	console.log('Aplicacao inicializada!');
});