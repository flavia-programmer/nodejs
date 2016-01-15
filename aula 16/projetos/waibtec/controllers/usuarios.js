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

    edit: function(req, res){
      Usuario.findById(req.params.id, function(err, data){
        if(err){
          console.log(err);
        }
        else{
          res.render('usuarios/edit', {value: data});
        }
      });
    },

    update: function(req, res){
      Usuario.findById(req.params.id, function(err, data){
        if(err){
          console.log(err);
        }
        else{
          var model = data;
          model.nome = req.body.nome;
          model.login = req.body.login;
          model.save(function(err){
            if(err){
              console.log(err);
            }
            else{
              res.redirect('/usuarios');
            }
          });
        }
      });
    }
  }
  return UsuarioController;
}
