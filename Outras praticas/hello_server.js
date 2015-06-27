var http = require('http');

var requisicao = function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello World!</h1>");
    response.end();
};

var inicializandoApp = function(){
    console.log('Inicilizando aplicacao...');
};

var server = http.createServer(requisicao);
server.listen(3000, inicializandoApp);