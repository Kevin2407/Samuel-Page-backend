import mongoose from 'mongoose';

// const url = 'mongodb://127.0.0.1:27017/articulos';
const url = 'mongodb+srv://kevmartin:Karenymaira2407@art-samuel.3arzc2r.mongodb.net/articulos';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(url, options);

mongoose.connect(url, options).catch(error => console.error("Error de conexión:", error));

// guardar conexion en una variable

const connection = mongoose.connection;

connection.on('error', console.error.bind(console,'conncetion error: '));
connection.once('open', ()=>console.log('BD conectada'));