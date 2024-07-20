const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // tu nombre de usuario de PostgreSQL
    host: 'localhost', // usar localhost para acceso local
    database: 'samuelvonarx', // el nombre de tu base de datos
    password: '140514', // la contraseña de tu usuario
    port: 5432, // el puerto por defecto de PostgreSQL
});
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

module.exports = pool;




















// import pkg from 'pg';
// const { Pool } = pkg;

// const pool = new Pool({
//     user: 'postgres', // tu nombre de usuario de PostgreSQL
//     host: 'localhost', // usar localhost para acceso local
//     database: 'samuelvonarx', // el nombre de tu base de datos
//     password: '140514', // la contraseña de tu usuario
//     port: 5432, // el puerto por defecto de PostgreSQL
// });
// // const pool = new Pool({
// //     user: 'kevinmartin', // tu nombre de usuario de PostgreSQL
// //     host: 'localhost', // usar localhost para acceso local
// //     database: 'prueba_samuelvonarx', // el nombre de tu base de datos
// //     password: '140514', // la contraseña de tu usuario
// //     port: 5434, // el puerto por defecto de PostgreSQL
// // });

// pool.connect((err, client, release) => {
//     if (err) {
//         return console.error('Error acquiring client', err.stack);
//     }
//     client.query('SELECT NOW()', (err, result) => {
//         release();
//         if (err) {
//             return console.error('Error executing query', err.stack);
//         }
//         console.log(result.rows);
//     });
// });

// export default pool;
