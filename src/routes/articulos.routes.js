import { Router } from "express";
import articulosCtrl from '../controllers/articulos.controllers';

// creo una instancia de router 

const router = Router();

// creo las rutas 

router.route("/")
    .get(articulosCtrl.listarArticulos)
    .post(articulosCtrl.postearArticulo);

router.route("/:id")
    .delete(articulosCtrl.eliminarArticulo)
    .put(articulosCtrl.editarArticulo)
    .get(articulosCtrl.obtenerArticulo)

export default router;