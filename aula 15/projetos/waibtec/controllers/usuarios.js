module.exports = function (app){
  var Usuario = app.models.usuarios;

  var UsuarioController = {
    index: function(req, res){
      Usuario.find(function(err,data){
        if(err){
          console.log(err);
        }
          res.render('usuarios/index', {lista: data});
      });
    },
    create: function(req, res){
      res.render("usuarios/create");
    },

    insert: function(req, res){
      var model = new Usuario(req.body); // req.body pega todos os campos do form
      model.save(function(err){
        if(err){
          console.log(err);
        }
        res.redirect('/usuarios');
      });

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
