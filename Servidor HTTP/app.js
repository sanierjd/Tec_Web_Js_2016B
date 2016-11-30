var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
  
  // request req
  // response res
  
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
