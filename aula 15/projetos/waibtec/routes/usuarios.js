module.exports = function(app){
  var usuarios = app.controllers.usuarios;

  app.get('/usuarios', usuarios.index);
  app.get('/usuarios/create', usuarios.create);
  app.post('/usuarios', usuarios.insert);
  app.get('/usuarios/lista', usuarios.lista);
}
