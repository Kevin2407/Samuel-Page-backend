// import Articulo from '../models/articulos.model';

// const articulosCtrl = {};

// articulosCtrl.listarArticulos = async (req,res) => {
//     try {
//         const arregloArts = await Articulo.find();
//         res.status(200).json(arregloArts);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('No te voy a mostra los articulos papilo')

//     }
// }

// articulosCtrl.postearArticulo = async (req,res)=>{
//     console.log(req.body);
    
//     try {
//         const { titulo, contenido, imagen, destacada , fecha } = req.body;

//         const nuevoArticulo = new Articulo({
//             titulo,
//             contenido,
//             imagen,
//             destacada,
//             fecha
//         })

//         await nuevoArticulo.save();

//         res.status(201).json('se pudo postea')
        
//     } catch (error) {
//         console.log(error);

//         res.status(500).json('no lo e podio postea chango');
//     }
// }

// articulosCtrl.eliminarArticulo = async (req,res) => {
//     try {
//         await Articulo.findByIdAndDelete(req.params.id);
//         res.status(200).json('borrado');
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('no funca');
//     }
// }

// articulosCtrl.editarArticulo = async (req,res) =>{
//     try {
//         await Articulo.findByIdAndUpdate(req.params.id,req.body);
//         res.status(200).json('se ha actualizado');
//     } catch (error) {
//         res.status(500).json('no se ha actualizado');
//         console.log(error);
//     }
// }

// articulosCtrl.obtenerArticulo = async (req,res) => {
//     try {
//         const artEncontrado = await Articulo.findById(req.params.id);
//         res.status(200).json(artEncontrado);
//     } catch (error) {
//         console.log(error);
//         res.status(500).json('No se encontro el articulo');

//     }
// }



// export default articulosCtrl;







import { Pool } from 'pg';
const pool = new Pool({
    user: 'kevinmartin',
    host: 'localhost',
    database: 'samuelvonarx',
    password: '140514',
    port: 5432,
});

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
        const query = 'INSERT INTO articulos (titulo, contenido, imagen, destacada, fecha) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [titulo, contenido, imagen, destacada, fecha];

        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json('no lo e podio postea chango');
    }
};

articulosCtrl.eliminarArticulo = async (req, res) => {
    try {
        const query = 'DELETE FROM articulos WHERE id = $1';
        const values = [req.params.id];
        await pool.query(query, values);
        res.status(200).json('borrado');
    } catch (error) {
        console.log(error);
        res.status(500).json('no funca');
    }
};

articulosCtrl.editarArticulo = async (req, res) => {
    try {
        const { titulo, contenido, imagen, destacada, fecha } = req.body;
        const query = 'UPDATE articulos SET titulo = $1, contenido = $2, imagen = $3, destacada = $4, fecha = $5 WHERE id = $6 RETURNING *';
        const values = [titulo, contenido, imagen, destacada, fecha, req.params.id];

        const result = await pool.query(query, values);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json('no se ha actualizado');
    }
};

articulosCtrl.obtenerArticulo = async (req, res) => {
    try {
        const query = 'SELECT * FROM articulos WHERE id = $1';
        const values = [req.params.id];
        const result = await pool.query(query, values);
        res.status(200).json(result.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json('No se encontro el articulo');
    }
};

export default articulosCtrl;
