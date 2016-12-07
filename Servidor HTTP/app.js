// comandos 

var express = require('express')
var app = express()

var usuarios = [
    {
        id:1,
        nombre: 'Pepe',
        cedula: '123'
    },
    {
        id:2,
        nombre: 'Jose',
        cedula: '1234'
    },
    {
        id:3,
        nombre: 'Juan',
        cedula: '12345'
    }
]

var contador = 3;

app.get('/', function (req, res) {
    
    console.log('1 antes de leer');
    
    fs.readFile('./paginas/pagina.html', 'utf8',
    function (error, archivoLeido){
        console.log('3 '+error);
        console.log('4 '+archivoLeido);
        
        res.send('Archivo leido');
    });
    
    console.log('2 parece que termino de leer');
  
})


var quePasa = '';
quePasa = 'esta por leer archivo'

/*
fs.readFile('./paginas/pagina.html', 'utf8',
    function error(error, archivoLeido){
        console.log(error);
        console.log(archivoLeido);
    });
    
    */






/*
app.post('/TecnologiasWeb', function (req, res) {
  // request req
  // response res
  
  var paremetros = req.param;
  
  var usuario = {
      nombre: 'Santiago',
      cedual: '1234566788'
  }
  
  console.log('lo que tengo en el request');
  console.log(req);
    
    console.log('cabecereas req');
    console.log(req.head);
    
    console.log('cabecereas res');
    console.log(res.head);
    
    usuario.apellido = '';
    usuario.mascota = '';
    
    
    
    
    res.append('token', '1234');
    
    res.json(usuario);    
  
})
*/

app.get('/Usuario', function (req, res) {

    res.json(usuarios);
    
})

app.get('/Usuario/:idUsuario', function (req, res) {
    
    var idActual = req.params.idUsuario;
    for(var i=0;i<usuarios.length;i++){
        if(idActual == usuarios[i].id){
            res.json(usuarios[i]);
        }
    }
    res.send('No existe el Usuario');
    
})

app.post('/Usuario', function (req, res) {
    
    
    console.log(req.query.nombre);
    console.log(req.query.cedula);
    
    
    if(!req.query.nombre){
        res.send('no envio nombre');
    }
    
    if(!req.query.cedula){
        res.send('no envio cedula');
    }
    
    var nuevoUsuario={
        id:contador+1,
        nombre:req.query.nombre,
        cedula:req.query.cedula
    }
    
    usuarios.push.
    
    
    
    res.json(usuarios);
})

// IMPLEMENTAR PUT Y DELETE

app.listen(5050, function () {
  console.log('Example app listening on port 5050!')
})
