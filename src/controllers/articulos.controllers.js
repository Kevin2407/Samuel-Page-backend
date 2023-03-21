import Articulo from '../models/articulos.model';

const articulosCtrl = {};

articulosCtrl.listarArticulos = async (req,res) => {
    try {
        const arregloArts = await Articulo.find();
        res.status(200).json(arregloArts);
    } catch (error) {
        console.log(error);
        res.status(500).json('No te voy a mostra los articulos papilo')

    }
}

articulosCtrl.postearArticulo = async (req,res)=>{
    console.log('pedo');
    console.log(req.body);
    
    try {
        const { titulo, contenido, imagen, fecha } = req.body;

        const nuevoArticulo = new Articulo({
            titulo,
            contenido,
            imagen,
            fecha
        })

        await nuevoArticulo.save();

        res.status(201).json('se pudo postea')
        
    } catch (error) {
        console.log(error);

        res.status(500).json('no lo e podio postea chango');
    }
}

articulosCtrl.eliminarArticulo = async (req,res) => {
    try {
        await Articulo.findByIdAndDelete(req.params.id);
        res.status(200).json('borrado');
        
    } catch (error) {
        console.log(error);
        res.status(500).json('no funca');
    }
}

articulosCtrl.editarArticulo = async (req,res) =>{
    try {
        await Articulo.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json('se ha actualizado');
    } catch (error) {
        res.status(500).json('no se ha actualizado');
        console.log(error);
    }
}

articulosCtrl.obtenerArticulo = async (req,res) => {
    try {
        const artEncontrado = await Articulo.findById(req.params.id);
        res.status(200).json(artEncontrado);
    } catch (error) {
        console.log(error);
        res.status(500).json('No se encontro el articulo');

    }
}



export default articulosCtrl;