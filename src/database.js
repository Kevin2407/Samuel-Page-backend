// import mongoose from 'mongoose';

// // const url = 'mongodb://127.0.0.1:27017/articulos';
// const url = 'mongodb+srv://kevmartin:Karenymaira2407@art-samuel.3arzc2r.mongodb.net/articulos';

// const options = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// };

// mongoose.connect(url, options);

// mongoose.connect(url, options).catch(error => console.error("Error de conexión:", error));

// // guardar conexion en una variable

// const connection = mongoose.connection;

// connection.on('error', console.error.bind(console,'conncetion error: '));
// connection.once('open', ()=>console.log('BD conectada'));






import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres', // tu nombre de usuario de PostgreSQL
    host: 'localhost', // usar localhost para acceso local
    database: 'samuelvonarx', // el nombre de tu base de datos
    password: '140514', // la contraseña de tu usuario
    port: 5432, // el puerto por defecto de PostgreSQL

// const pool = new Pool({
//     user: 'kevinmartin', // tu nombre de usuario de PostgreSQL
//     host: 'localhost', // usar localhost para acceso local
//     database: 'prueba_samuelvonarx', // el nombre de tu base de datos
//     password: '140514', // la contraseña de tu usuario
//     port: 5434, // el puerto por defecto de PostgreSQL
// });

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error acquiring client', err.stack);
    }
    client.query('SELECT NOW()', (err, result) => {
        release();
        if (err) {
            return console.error('Error executing query', err.stack);
        }
        console.log(result.rows);
    });
});

export default pool;
