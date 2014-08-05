// importar
var express = require('express');

// instanciar
var app = express();
app.use(express.static(__dirname+'/app/components'));
app.use(express.static(__dirname+'/dist'));
app.use(express.static(__dirname+'/test'));
app.use(express.static(__dirname+'/src'));

// ruteo
/*app.get('/', function(req, res){
    res.sendfile(__dirname + '/test/index.html');
});*/

// escuchar
app.listen(9003);

console.log("Servidor Express escuchando en modo %s", app.settings.env);