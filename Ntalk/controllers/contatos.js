module.exports = function(app) {
	
	var contatoController = {
		
		index: function(req,res) {
			var usuario = req.session.usuario
			,   contatos= usuario.contatos
			,	params  = { usuario:usuario, contatos : contatos };
			
			res.render('contatos/index',params); 			
		},
		
		show: function(req, res) {
			var id = req.params.id
			  , contato = req.session.usuario.contatos[id]
			  , params = {contato: contato, id: id};  
			
			console.log(params);
			res.render('contatos/show', params);
		},
		
		create: function(req, res) {
			var contato = req.body.contato;
			
			req.session.usuario.contatos.push(contato);
			
			console.log(req.session.usuario);
			res.redirect('/contatos');
		},
	
		edit: function(req,res) {
			var id = req.params.id
			  , usuario = req.session.usuario
			  , contato = usuario.contatos[id]
			  , params = {  usuario: usuario, 
			  			 	contato: contato, 
							id: id };
			
			res.render('contatos/edit', params);
		},
		
		update: function(req, res) {
			var contato = req.body.contato
			  , usuario = req.session.usuario
			  , id = req.params.id; 
	    	
			usuario.contatos[id] = contato;	
			res.redirect('/contatos');
		}, 
		
		destroy: function(req, res) {
			var usuario = req.session.usuario
			  , id = req.params.id;
		  	
			console.log('chegou no destroy');  
			usuario.contatos.splice(id, 1);
			res.redirect('/contatos');
		}
	};
	return contatoController;
};