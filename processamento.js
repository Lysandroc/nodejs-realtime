var http = require('http');
var fs = require('fs');
var leituraAsync = require('./leitura_async');
var leituraSync = require('./leitura_sync');
var arquivo = './node.zip';
var stream = fs.createWriteStream(arquivo);
var download = "http://nodejs.org/dist/v0.10.12/node-v0.10.12.tar.gz";

http.get(download, function(res) {
	console.log('fazendo download do nodejs');
	res.on('data',function(data) {
		stream.write(data);
	});
	res.on('end', function() {
		stream.end();
		console.log('download finalizado');
		leituraAsync(arquivo);
		leituraSync(arquivo);
	});
});