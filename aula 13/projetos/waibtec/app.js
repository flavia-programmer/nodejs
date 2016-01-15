var express = require('express');
var load = require('express-load');
//var http = require('http');
var path = require('path');
 var favicon = require('serve-favicon');
 var logger = require('morgan');
 var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


//
// var routes = require('./routes/index');
// var users = require('./routes/users');
// var teste = require('./routes/index');
// var contato = require('./routes/index');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



// app.use('/', routes);
// app.use('/users', users);
// app.use('/teste', routes);
// app.use('/contato', routes);

load('models').then('controllers').then('routes').into(app);  // express-load: modulo que vai gerenciar a aplicacao no modelo mvc, entao vao carregar os models, controllers e routes.

/* MongoDB  */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/waibtec');

var db = mongoose.connection;

var kittySchema = mongoose.Schema({
    name: String
});

var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({ name: 'Silence' });

silence.save(function (err, fluffy) {
  if (err) return console.error(err);
    console.log('Salvo com Sucesso!');
});

//console.log(silence.name); // 'Silence'



db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  // we're connected!
  console.log('Banco de dados rodando...');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
//
//



 module.exports = app;
//
// //esse codigo eu que adicionei
var server = app.listen(3000, function() {
    console.log(new Date().toISOString() + ": server started on port 3000");
});

//Simplificado
// var http = require('http');
// var load = require('express-load');
// var express = require('express');
// var app = express();
// var server = http.createServer(app);
//
//
// load('models').then('controllers').then('routes').into(app);  // express-load: modulo que vai gerenciar a aplicacao no modelo mvc, entao vao carregar os models, controllers e routes.
//
// var server = app.listen(3000, function() {
//     console.log(new Date().toISOString() + ": server started on port 3000");
// });
