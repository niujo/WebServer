const express = require('express');
const hbs = require('hbs');
const app = express();

require('./hbs/helpers/helpers');

const port = process.env.PORT || 8080;


app.use(express.static(__dirname+'/public'));
//Expresss HBS engine
hbs.registerPartials( __dirname+'/views/parciales');
app.set('view engine', 'hbs');

//pag principal
app.get('/',(req,res)=>{
  res.render('home',{
    nombre:'Claudio',
    anio: new Date().getFullYear()

  });
})
//otro path
app.get('/about',(req,res)=>{
  res.render('about',{
    
    anio: new Date().getFullYear()

  });
})

app.listen(port,()=>{
  console.log(`Escuchando puerto ${port}`);
});