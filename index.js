// const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js'


const app = express();

//Conectar la base de datos
db.authenticate().then(() =>console.log('Base de datos conectada'))
.catch(error=> console.log(error))

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar puerto
app.set('view engine','pug');

//Definir la carpeta pública
app.use(express.static('public'));

//Obtener el año actual
app.use((req,res,next)=>{
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombresitio = "Travel Agency";
  console.log(res.locals);
  return next()
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));

//Agregar Router
app.use('/', router)

app.listen(port,()=>{
  console.log(`El Servidor está funcionando en el puerto ${port}`);
}) 
