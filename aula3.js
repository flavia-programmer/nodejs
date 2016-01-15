var arquivo = require('fs');
var path = './arquivos/novo.txt';

arquivo.readFile('./arquivos/clubes.txt', function(err, data){
  if (err)
    throw err;
  console.log(data.toString());
});

arquivo.exists(path, function(resultado){
  if(!resultado){
    arquivo.writeFile(path, 'Criando arquivo com nodejs', function(err){
      if (err) throw err;
      console.log('Arquivo criado com sucesso!');
    })
  }
  else{
    console.log('Arquivo já criado!');
  }
})
