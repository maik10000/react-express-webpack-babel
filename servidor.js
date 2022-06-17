'use stric'
const express = require('express');

const path = require('path');
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware')
const config = require('./webpack.config')
const app = express();
const port = 3000
app.use(webpackDev(webpack(config)))
app.use(express.static(path.join(__dirname,'public/index.html')))
app.listen(port,(e)=>{
    console.log('Escucha en el puerto '+ port)
}) 
