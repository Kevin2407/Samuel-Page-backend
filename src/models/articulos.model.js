import mongoose, { Schema } from 'mongoose';

const articuloSchema = new Schema({
    titulo: {
        type: String,
        maxlenght: 100,
        required: true,
        unique: true
    },
    contenido: {
        type: String,
        required: true,

    },
    fecha: {
        type: Date,
        default: Date.now
    },
    imagen: {
        type: String
    }
});

const Articulo = mongoose.model('articulo', articuloSchema);

export default Articulo;


