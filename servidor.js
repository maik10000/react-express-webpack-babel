'use stric'
const express = require('express');
const path = require('path');
const app = express();
var fs = require('fs');
const { response } = require('express');
//settings
app.set('port',process.env.PORT || 3000)
//middleware
app.use(express.json())
//rutas
app.get('/',(req,res,next)=>{
   next()
})
app.get('/juego',(req,res,next)=>{
    res.redirect('/juego')
})
app.get('/formulario',(req,res)=>{
    res.redirect('/')
})
app.post('/formulario',(req,res)=>{
    console.log('Datos recividos la servidor')
    console.log(req.body)
    res.redirect('/')
})
//static
app.use(express.static(path.join(__dirname,'public')))
app.listen(app.get('port'),()=>{
    console.log('Escucha en el puerto '+ app.get('port'))
}) 
