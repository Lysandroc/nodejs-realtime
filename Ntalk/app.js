var express = require('express')
  , load = require('express-load')
  , app = express()
  , cookieParser = require('cookie-parser')
  , expressSession = require('express-session') 
  , bodyParser = require('body-parser')
  , methodOverride = require('method-override')
  , error = require('./middleware/error')
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);
  
  
var KEY = 'ntalk.sid'
  , SECRET = 'ntalk'
  , KEY = 'ntalk.sid'
  , SECRET = 'ntalk'
  , cookie = cookieParser(SECRET)
  , store = new expressSession.MemoryStore()
  , sessOpts = {secret: SECRET, key: KEY, store: store}
  , session = expressSession(sessOpts);


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookie);
app.use(session);
app.use(bodyParser());
app.use(methodOverride());
app.use(express.Router());
app.use(express.static(__dirname + '/public'));

load('models')
   .then('controllers')
   .then('routes')
   .into(app);
load('sockets')
   .into(io);
   
app.use(error.notFound);
app.use(error.serverError);

server.listen(3000, function() {
    console.log('Ntalk no ar');
});  


