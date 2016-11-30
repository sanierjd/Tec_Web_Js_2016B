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

app.get('/', function (req, res) {
  res.send('Hello World!')
  
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

app.listen(5050, function () {
  console.log('Example app listening on port 5050!')
})
