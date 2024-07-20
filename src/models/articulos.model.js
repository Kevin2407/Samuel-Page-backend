const mongoose = require('mongoose');
const { Schema } = mongoose;

const articuloSchema = new Schema({
    titulo: {
        type: String,
        maxlength: 100,
        required: true,
        unique: true
    },
    imagen: {
        type: String
    },
    contenido: {
        type: String,
        required: true
    },
    destacada: {
        type: Boolean
    },
    fecha: {
        type: Date,
        default: Date.now
    }
});

const Articulo = mongoose.model('articulo', articuloSchema);

module.exports = Articulo;

















// import mongoose, { Schema } from 'mongoose';

// const articuloSchema = new Schema({
//     titulo: {
//         type: String,
//         maxlenght: 100,
//         required: true,
//         unique: true
//     },
//     imagen: {
//         type: String
//     },
//     contenido: {
//         type: String,
//         required: true,

//     },
//     destacada: {
//         type: Boolean
//     },
//     fecha: {
//         type: Date,
//         default: Date.now
//     }
// });

// const Articulo = mongoose.model('articulo', articuloSchema);

// export default Articulo;


