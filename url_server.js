var http = require("http");
var url = require("url");

http.createServer(function(request, response) {
	response.writeHeader(200, {"Content-Type": "text/html"});
	response.write("dados de uma query string!");
	var result = url.parse(request.url);
	// for(var key in result.query) {
	// 	response.write("<h2>"+key+" : "+result.query[key]+"</h2>");
	// }
	response.write("<br><br>" + result.href);
	response.write("<br><br>" + result.protocol);
	response.write("<br><br>" + result.host);
	response.write("<br><br>" + result.auth);
	response.write("<br><br>" + result.hostname);
	response.write("<br><br>" + result.port);
	response.write("<br><br>" + result.pathname);
	response.write("<br><br>" + result.path);
	response.write("<br><br>" + result.search);
	response.write("<br><br>" + result.query);
	response.write("<br><br>" + result.hash);
	
	response.end();
}).listen(3000, function() {
	console.log('Aplicacao inicializada!');
});	 