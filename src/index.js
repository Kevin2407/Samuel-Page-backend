import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
import articulosRoute from './routes/articulos.routes';


// settings

// creo una instancia de express
const app = express();

// elijo un puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log(path.join(__dirname, '../public/'));
    console.log("estoy en el puerto " + app.get('port'));
});

// Middlewares (importante hacerlos antes de las rutas, sino no funciona)

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// agregar la carpeta public como estatica
app.use(express.static(path.join(__dirname, '../public/')));

// creo una ruta
app.use('/api/articulos',articulosRoute);