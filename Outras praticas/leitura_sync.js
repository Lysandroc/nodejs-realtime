var fs = require('fs');

var leituraSync = function(arquivo) {
	console.log('fazendo leitura do sincrona');
	var inicio = new Date().getTime();
	fs.readFileSync(arquivo);
	var fim = new Date().getTime();
	console.log('Bloqueio sincrono'+ (fim-inicio) +'ms');
}

module.exports = leituraSync;