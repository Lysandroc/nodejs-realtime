module.exports = function(app) {
  var autenticar = require('./../middleware/autenticador')
    , chat = app.controllers.chat;
  
  console.log('chegou na rota');  
  app.get('/chat/:email', autenticar, chat.index);
};