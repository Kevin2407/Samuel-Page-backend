const pool = require('../database');
const { v4: uuidv4 } = require('uuid');

const articulosCtrl = {};

articulosCtrl.listarArticulos = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM articulos');
        res.status(200).json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json('No te voy a mostrar los articulos papilo');
    }
};

articulosCtrl.postearArticulo = async (req, res) => {
    console.log(req.body);

    try {
        const { titulo, contenido, imagen, destacada, fecha } = req.body;
        const id = uuidv4();  // Genera un UUID
        const query = 'INSERT INTO articulos (_id, titulo, contenido, imagen, destacada, fecha) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
        const values = [id, titulo, contenido, imagen, destacada, fecha];

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json('no lo e podio postea chango');
    }
};

articulosCtrl.eliminarArticulo = async (req, res) => {
    console.log(req.body);
    try {
        const query = 'DELETE FROM articulos WHERE _id = $1';
        const values = [req.params.id];
        await pool.query(query, values);
        res.status(200).json('borrado');
    } catch (error) {
        console.log(error);
        res.status(500).json('no funca');
    }
};

articulosCtrl.editarArticulo = async (req, res) => {
    const client = await pool.connect();

    try {
        const { titulo, contenido, imagen, destacada, fecha } = req.body;

        const query = 'UPDATE articulos SET titulo = $1, contenido = $2, imagen = $3, destacada = $4, fecha = $5 WHERE _id = $6 RETURNING *';
        const values = [titulo, contenido, imagen, destacada, fecha, req.params.id];

        const result = await client.query(query, values);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json('no se ha actualizado');
    } finally {
        client.release();
    }
};

articulosCtrl.obtenerArticulo = async (req, res) => {
    try {
        const query = 'SELECT * FROM articulos WHERE _id = $1';
        const values = [req.params.id];
        const result = await pool.query(query, values);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json('No se encontro el articulo');
    }
};

articulosCtrl.destacarArticulo = async (req, res) => {
    try {
        const { idADestacar } = req.body;
        console.log('EL IDDDD ESTA ACAAAAAAAA', idADestacar);
        const query = "UPDATE configuracion SET value = $1 WHERE description = 'id_destacada' RETURNING *";
        const values = [idADestacar];
        const result = await pool.query(query, values);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json('No se pudo destacar el articulo');
    }
};

articulosCtrl.obtenerDestacado = async (req, res) => {
    try {
        const query = "SELECT value FROM configuracion WHERE description = 'id_destacada' LIMIT 1";
        const result = await pool.query(query);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json('No se encontro ningun destacado');
    }
};

module.exports = articulosCtrl;
















// import pool from '../database.js';
// import { v4 as uuidv4 } from 'uuid';

// const articulosCtrl = {};

// articulosCtrl.listarArticulos = async (req, res) => {
//     try {
//         const result = await pool.query('SELECT * FROM articulos');
//         res.status(200).json(result.rows);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('No te voy a mostrar los articulos papilo');
//     }
// };

// articulosCtrl.postearArticulo = async (req, res) => {
//     console.log(req.body);

//     try {
//         const { titulo, contenido, imagen, destacada, fecha } = req.body;
//         const id = uuidv4();  // Genera un UUID
//         const query = 'INSERT INTO articulos (_id, titulo, contenido, imagen, destacada, fecha) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
//         const values = [id, titulo, contenido, imagen, destacada, fecha];

//         const result = await pool.query(query, values);
//         res.status(201).json(result.rows[0]);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('no lo e podio postea chango');
//     }
// };


// articulosCtrl.eliminarArticulo = async (req, res) => {
//     console.log(req.body);
//     try {
//         const query = 'DELETE FROM articulos WHERE _id = $1';
//         const values = [req.params.id];
//         await pool.query(query, values);
//         res.status(200).json('borrado');
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('no funca');
//     }
// };


// articulosCtrl.editarArticulo = async (req, res) => {
//     const client = await pool.connect();

//     try {
//         const { titulo, contenido, imagen, destacada, fecha } = req.body;

//         const query = 'UPDATE articulos SET titulo = $1, contenido = $2, imagen = $3, destacada = $4, fecha = $5 WHERE _id = $6 RETURNING *';
//         const values = [titulo, contenido, imagen, destacada, fecha, req.params.id];

//         const result = await client.query(query, values);
//         res.status(200).json(result.rows[0]);

//     } catch (error) {
//         console.log(error);
//         res.status(500).json('no se ha actualizado');
//     } finally {
//         client.release();
//     }
// };




// articulosCtrl.obtenerArticulo = async (req, res) => {
//     try {
//         const query = 'SELECT * FROM articulos WHERE _id = $1';
//         const values = [req.params.id];
//         const result = await pool.query(query, values);
//         res.status(200).json(result.rows[0]);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('No se encontro el articulo');
//     }
// };

// articulosCtrl.destacarArticulo = async (req, res) => {
//     try {
//         const { idADestacar } = req.body;
//         console.log('EL IDDDD ESTA ACAAAAAAAA', idADestacar);
//         const query = "UPDATE configuracion SET value = $1 WHERE description = 'id_destacada' RETURNING *";
//         const values = [idADestacar];
//         const result = await pool.query(query, values);
//         res.status(200).json(result.rows[0]);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('No se pudo destacar el articulo');
//     }
// };

// articulosCtrl.obtenerDestacado = async (req, res) => {
//     try {
//         const query = "SELECT value FROM configuracion WHERE description = 'id_destacada' LIMIT 1";
//         const result = await pool.query(query);
//         res.status(200).json(result.rows[0]);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('No se encontro ningun destacado');
//     }
// };


// export default articulosCtrl;
