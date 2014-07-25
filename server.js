// importar
var express = require('express');

// instanciar
var app = express();
app.use(express.static(__dirname+'/'));
//app.use(express.static(__dirname+'/src'));
app.use(express.static(__dirname+'/test'));

// ruteo
/*app.get('/', function(req, res){
    res.sendfile(__dirname + '/test/index.html');
});*/

// escuchar
app.listen(9001);

console.log("Servidor Express escuchando en modo %s", app.settings.env);