const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const https = require('https');
const fs = require('fs');
const articulosRoute = require('./routes/articulos.routes.js');

// settings

// creo una instancia de express
const app = express();

// elijo un puerto
app.set('port', process.env.PORT || 4000);

// Middlewares (importante hacerlos antes de las rutas, sino no funciona)
app.use(morgan('dev'));
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// agregar la carpeta public como estatica
app.use(express.static(path.join(__dirname, '../public/')));

// creo una ruta
app.use('/api/articulos', articulosRoute);

app.listen(app.get('port'), '0.0.0.0', () => {
    console.log(`Server is running on port ${app.get('port')}`);
});


















// import express from 'express';
// import morgan from 'morgan';
// import cors from 'cors';
// import path from 'path';
// import https from 'https';
// import fs from 'fs';
// import articulosRoute from './routes/articulos.routes.js';

// // settings

// // creo una instancia de express
// const app = express();

// // elijo un puerto
// app.set('port', process.env.PORT || 4000);

// // Middlewares (importante hacerlos antes de las rutas, sino no funciona)
// app.use(morgan('dev'));
// app.use(cors({
// 	origin: '*',
// 	optionsSuccessStatus: 200
// }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // agregar la carpeta public como estatica
// app.use(express.static(path.join(__dirname, '../public/')));

// // creo una ruta
// app.use('/api/articulos', articulosRoute);



// app.listen(app.get('port'), '0.0.0.0', ()=> {
//       console.log(`Server is running on port ${app.get('port')}`);
//  });


