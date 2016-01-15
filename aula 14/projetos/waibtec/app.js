var express = require('express');
var load = require('express-load');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');


var app = express();
mongoose.connect('mongodb://localhost/waibtec', function(err){
  if(err){
    console.log('Erro ao conectar no MongoDB: '+err);
  }
});
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname+'/public'));


load('models').then('controllers').then('routes').into(app);  // express-load: modulo que vai gerenciar a aplicacao no modelo mvc, entao vao carregar os models, controllers e routes.


app.listen(3000, function() {
    console.log(new Date().toISOString() + ": server started on port 3000");
});
