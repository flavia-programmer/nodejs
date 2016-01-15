module.exports = function (app){
  var Usuario = app.models.usuarios;

  var UsuarioController = {
    index: function(req, res){
      res.render('usuarios/index');
    },
    create: function(req, res){
      var model = new Usuario({
        nome: 'Renato',
        login: 'renato',
        senha: '123'
      });
      model.save(function(erro, data){
        if(erro){
          console.log('Erro ao salvar: '+erro);
        }else {
          res.json(data);
        }
      })
    },
    lista: function(req, res){
      Usuario.find(function(erro, data){
         if(erro){
           console.log('Erro ao buscar usuários: '+erro);
         }else{
           res.json(data);
         }
      })
    }
  }
  return UsuarioController;
}
