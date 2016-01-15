/*
 Nao deu pra instalar o Zipper, pois deu erro ...
-->  sudo npm install zipper
 */

 zipper  = require ('zipper').Zipper;

 //Diretório e o nome do arquivo a ser gerado
 var zipfile = new zipper ('./arquivos/arquivo.zip');

 //Arquivo / Caminho do arquivo
 zipfile.addFile('aula1.js', 'aula1.js', function(err){
   if (err) throw err;
   console.log('Tudo Ok!');
 });
