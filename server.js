const express = require('express');
const hbs = require('hbs');

const app = express();

app.use(express.static(__dirname+'/public'));
//Expresss HBS engine
hbs.registerPartials( __dirname+'/views/parciales');
app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
  res.render('home',{
    nombre:'Claudio',
    anio: new Date().getFullYear()

  });
})
app.get('/about',(req,res)=>{
  res.render('about',{
    
    anio: new Date().getFullYear()

  });
})

app.listen(8080,()=>{
  console.log('Escuchando puerto 8080');
});