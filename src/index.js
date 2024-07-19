import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import https from 'https';
import fs from 'fs';
import './database';
import articulosRoute from './routes/articulos.routes';

// settings

// creo una instancia de express
const app = express();

// elijo un puerto
app.set('port', process.env.PORT || 4000);

// Middlewares (importante hacerlos antes de las rutas, sino no funciona)
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// agregar la carpeta public como estatica
app.use(express.static(path.join(__dirname, '../public/')));

// creo una ruta
app.use('/api/articulos', articulosRoute);

// Cargar los archivos de certificado SSL
const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'certs/localhost-key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certs/localhost.pem'))
};

// Crear el servidor HTTPS
https.createServer(sslOptions, app).listen(app.get('port'), () => {
    console.log(path.join(__dirname, '../public/'));
    console.log(`Servidor corriendo en https://localhost:${app.get('port')}`);
});





// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import articulosRoutes from './routes/articulos.routes.js';

// const app = express();
// const PORT = 4000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors({
//     origin: 'https://localhost:3000', // Asegúrate de que esto coincida con la URL de tu frontend
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type,Authorization',
// }));

// // Rutas
// app.use(articulosRoutes);

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
