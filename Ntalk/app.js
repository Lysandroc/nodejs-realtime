var express = require('express')
  , load = require('express-load')
  , app = express()
  , cookie = require('cookie-parser')
  , session = require('express-session') 
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , error = require('./middleware/error');
  
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookie('ntalk'));
app.use(session());
app.use(bodyParser());
app.use(methodOverride());
app.use(express.Router());
app.use(express.static(__dirname + '/public'));

load('models')
   .then('controllers')
   .then('routes')
   .into(app);

app.use(error.notFound);
app.use(error.serverError);

app.listen(3000, function() {
    console.log('Ntalk no ar');
});  


