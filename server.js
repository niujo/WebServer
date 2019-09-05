const express = require('express');
const app = express();
 
app.get('/',(req, res) =>{
  /* res.send('Hello World'); */
  let salida ={
    nombre: 'claudio',
    edad: 33,
    url: req.url
  }
  res.send(salida);
});
 
app.listen(8080);